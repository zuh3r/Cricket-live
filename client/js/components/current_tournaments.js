function renderTournaments(tournamentsData){
    console.log(tournamentsData)
    document.querySelector('#page').innerHTML = `
        <section class="tournaments">
            <ul>
                ${renderMatch(tournamentsData)}
            </ul>
        </section>
    
    `
    
} 

function getTournaments(){
     console.log('test2')
    axios.get('/api/matches/today') 
        .then(data => tournaments = data)
        .then(() => renderTournaments(tournaments.data.sport_events)) 
        

}
 

function renderMatch(tournaments){

    return tournaments.map( match => 
        `<li>
            <h2>
                ${match.season.name}
            </h2>
            <div class="competitors">
                <p>${match.competitors[0].name}</p> vs
                <p>${match.competitors[1].name}</p>
            <p class="startDate">${match.season.start_date}</p>
            <p class="endDate">${match.season.end_date}</p>
            <h3 class="country">${match.tournament.category.name}</h3>
            <span class="status">${match.status}</span>    
        </li>`

    ).join('')

 
}