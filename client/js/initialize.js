
var tournaments = {}


axios.get('/api/matches/today') 
.then(res => {
    tournaments = res.data.sport_events
    console.log(tournaments)
    console.log("tournametns received")
    renderTournaments(tournaments)
    renderAllNews()
    renderLogin() 
})

getNews()
