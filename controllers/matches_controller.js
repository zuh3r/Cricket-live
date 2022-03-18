const express = require('express')
const axios = require('axios')

const router = express.Router()


//ROUTES 

router.get('/schedule/:tournament_id', (req, res) => {
    console.log("test, in schedule route")
    var tournament_id = req.params.tournament_id 
    
    axios.get(`https://api.sportradar.us/cricket-t2/en/tournaments/${tournament_id}/schedule.json?api_key=${process.env['SPORTRADAR_API_KEY']}`)
    .then(response => { testResponse = response; return response.data }) 
    .then(data => { 
        res.json(data) 
    })
    .catch(error => res.json(error))
    
})

router.get('/tournaments', (req, res) => {
    axios.get(`https://api.sportradar.us/cricket-t2/en/tournaments.json?api_key=${process.env['SPORTRADAR_API_KEY2']}`)
    .then(response => response.data)
    .then(tournaments => res.json(tournaments))
})

router.get('/today', (req, res) => {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; if (mm < 10) mm = '0' + mm
    var yyyy = today.getFullYear();
    
    axios.get(`https://api.sportradar.us/cricket-t2/en/schedules/${yyyy}-${mm}-${dd}/schedule.json?api_key=${process.env['SPORTRADAR_API_KEY']}`)
    .then(response => response.data)
    .then(tournaments => res.json(tournaments))
})
 
router.get('/team/:name', (req,res) => {
    var teamName = req.params.name
    axios.get(`https://serpapi.com/search.json?q=${teamName + ' cricket team logo'}&tbm=isch&ijn=0&api_key=${process.env['SERPAPI_API_KEY']}`)
    .then(response => res.json(response.images_results[0].thumbnail))
})

router.get('/match/summary/:match_id', (req, res) => {

    console.log("test, in match summary route")
    var match_id = req.params.match_id 
    
    axios.get(`https://api.sportradar.us/cricket-t2/en/matches/${match_id}/summary.json?api_key=${process.env['SPORTRADAR_API_KEY']}`)
    .then(response => { testResponse = response; return response.data }) 
    .then(data => { 
        res.json(data) 
    })
})


module.exports = router;