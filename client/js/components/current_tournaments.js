function renderTournaments(tournamentsData,startIndex){
    //console.log(tournamentsData)

    document.querySelector('.tournamentsSection').innerHTML = ` 
            <ul class="tournaments_ul">
                ${renderTournamentsList(tournamentsData, startIndex)}
            </ul> 
            <span class="showNextFiveOnClick">Next</span>
    
    `
    document.querySelector('.tournaments_ul li:nth-child(3)').classList.add('hover')
} 

function renderMatches(matches){
    //console.log(matches)

    document.querySelector('.matchesSection').innerHTML = `  
            <ul class="matches_ul">
                ${renderAllMatches(matches)}
            </ul>  
    
    `
} 

// function getTournaments(){
//      console.log('test2')
//     axios.get('/api/matches/today') 
//         .then(data => tournaments = data)
//         .then(() => renderTournaments(tournaments.data.sport_events)) 
        

// }

// function renderLiveMatches(tournaments){
    
//     return tournaments.filter( match => match.status == 'live').map( match => 
//         `<li>
//             <h2>
//                 ${match.season.name}
//             </h2>
//             <div class="competitors">
//                 <p>${match.competitors[0].name}</p> vs
//                 <p>${match.competitors[1].name}</p>
//             <p class="startDate">${match.season.start_date}</p>
//             <p class="endDate">${match.season.end_date}</p>
//             <h3 class="country">${match.tournament.category.name}</h3>
//             <span class="status">${match.status}</span>    
//         </li>`

//     ).join('')
// }

function renderAllMatches(matches){

    // Removing cancelled filter so people can see it even if a match was cancelled.. return tournaments.filter( match => match.status != 'cancelled')
    return matches.map( match => 
        `<li class="current-match">
            <div class="tournament">
                <span class="tournament-name">${match.season.name}</span>
            </div>
            <div class="teams">
                <div class="team1" team-id="${match.competitors[0].id}">
                    <span class="team1-flag">🇵🇰</span>
                    <span class="team1-name">${match.competitors[0].name}</span>
                    <!-- <span class="team1-scores">148 & 192/2</span> -->
                </div>
                VS
                <div class="team2" team-id="${match.competitors[1].id}">
                    <span class="team2-name">${match.competitors[1].name}</span>
                    <span class="team2-flag">🇮🇳</span>
                    <!-- <span class="team2-scores">556/9d & 97/2</span> -->
                </div>
            </div>
            <div class="details">
                <span class="match-date">
                    <span class="start">${match.season.start_date}</span>
                    <span class="end">${match.season.end_date}</span>
                </span>
                <span class="match-country">${match.tournament.category.name}</span> 
            </div> 
            <span class="status ${(match.status=='live')?'live':(match.status=='cancelled')?'cancelled':''}" ${(match.status == 'closed')?'onClick="renderMatchSummary(event)"':''} match-id='${match.id}'>${(match.status == 'live')?'Live':(match.status == 'cancelled')?'Cancelled':(match.status == 'Closed')?'Finished':(match.status == 'not_started')?'Not Started':''}</span>    
        </li>
        `

        // `<li>
        //     <h2>
        //         ${match.season.name}
        //     </h2>
        //     <div class="competitors">
        //         <p team-id="${match.competitors[0].id}">${match.competitors[0].name}</p> vs
        //         <p team-id="${match.competitors[1].id}">${match.competitors[1].name}</p>
        //     </div>
        //     <p class="startDate">${match.season.start_date}</p>
        //     <p class="endDate">${match.season.end_date}</p>
        //     <h3 class="country">${match.tournament.category.name}</h3>
        //     <span class="status" ${(match.status == 'closed')?'onClick="renderMatchSummary(event)"':''} match-id='${match.id}'>${match.status}</span>    
        // </li>`

    ).join('')
}

function renderTournamentsList(tournaments, startIndex){

    return tournaments.slice(startIndex, startIndex + 5).map( tournament => `
        <li class="tournamentItem" onClick="showTournament(event)" tournament_id="${tournament.id}" onmouseover="addHoverClass(event)">
            <div class="content current-match">
                <div class="tournament">
                    <span class="tournament-name">${tournament.name}</span>

                    <span class="match-date">
                        <span class="start">${tournament.current_season.start_date}</span>
                        <span class="end">${tournament.current_season.end_date}</span>
                    </span>
                </div> 
                
                <div class="details"> 
                    <span class="type">${tournament.type}</span>    
                    <span class="year hide">${tournament.current_season.year}</span>
                    <span class="match-country">${tournament.category.name}</span> 
                </div>
            </div>
        </li>
      `
        
    ).join('')



    // // Removing cancelled filter so people can see it even if a match was cancelled.. return tournaments.filter( match => match.status != 'cancelled')
    // return tournaments.slice(startIndex, startIndex + 5).map( tournament => 
    //     `<li class="tournamentItem" onClick="showTournament(event)" tournament_id="${tournament.id}">
    //         <h2>
    //             ${tournament.name}
    //         </h2> 
    //         <p class="startDate">${tournament.current_season.start_date}</p>
    //         <p class="endDate">${tournament.current_season.end_date}</p>
    //         <h3 class="year">${tournament.current_season.year}</h3>
    //         <span class="type">${tournament.type}</span>    
    //     </li>`

    // ).join('')
}


function addHoverClass(event){
    document.querySelectorAll('.hover').forEach(element => {
        element.classList.remove('hover')
    })
    event.target.closest('li').classList.add('hover')
}


//click events  

//get matches using tournament ID 
function showTournament(event){
    var tournamentId = event.target.closest('li').getAttribute('tournament_id')
    
    axios.get(`/api/matches/schedule/${tournamentId}`)  //gets a list of tournaments
    .then(res => {
        testResponse = res
        tournamentMatches = res.data.sport_events 
        console.log("matches for tournament received")
        //console.log(renderAllMatches(tournamentMatches,0))
    })
    .catch(errorMessage => console.log(errorMessage))

}

//get match summary by clicking on closed matches
function renderMatchSummary(event){
    var matchID = event.target.getAttribute('match-id')
    axios.get(`/api/matches/match/summary/${matchID}`)  //returns data with match status, has all information, from overs, to winner, to man of the match etc etc 
    .then(res => {
        matchSummary = res.data
        console.log("match summary for closed match received")
        //console.log(match)//renderAllMatches(matches,0))
    })
}

//get team details using match competitor IDs

//get player profiles by clicking player


