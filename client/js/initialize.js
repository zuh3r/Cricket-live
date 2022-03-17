
var matches = {}
var tournaments = {}

document.querySelector('#page').innerHTML = `
    <div class='tournamentsSection'></div>
    <div class='matchesSection'></div>
    <div class='newsSection'></div>
    `



axios.get('/api/matches/tournaments')  //gets a list of tournaments
    .then(res => {
        tournaments = res.data.tournaments 
        console.log("tournaments received")
        renderTournaments(tournaments,0) 
})

axios.get('/api/matches/today')  //gets matches from today
    .then(res => {
        matches = res.data.sport_events 
        console.log("matches from today received")
        renderMatches(matches)
        //renderLogin() 
})


getNews()
