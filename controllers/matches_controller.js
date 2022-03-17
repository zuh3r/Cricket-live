const express = require('express')
const axios = require('axios')

const router = express.Router()


//ROUTES

router.get('/schedules', (req, res) => {
     console.log("test")
    
    axios.get(`https://api.sportradar.com/cricket-t2/en/schedules/live/schedule.json?api_key=${process.env['SPORTRADAR_API_KEY']}`)
    .then(response => response.data) 
    .then(matches => {
        res.json(matches) 
    })
    
})

router.get('/tournaments', (req, res) => {
    axios.get(`http://api.sportradar.us/cricket-t2/en/tournaments.json?api_key=${process.env['SPORTRADAR_API_KEY']}`)
    .then(response => response.data)
    .then(tournaments => res.json(tournaments))
})

router.get('/today', (req, res) => {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; if (mm < 10) mm = '0' + mm
    var yyyy = today.getFullYear();

    axios.get(`http://api.sportradar.us/cricket-t2/en/schedules/${yyyy}-${mm}-${dd}/schedule.json?api_key=${process.env['SPORTRADAR_API_KEY']}`)
    .then(response => response.data)
    .then(tournaments => res.json(tournaments))
})
 
router.get('/team/:name', (req,res) => {
    var teamName = req.params.name
    axios.get(`https://serpapi.com/search.json?q=${teamName + ' cricket team logo'}&tbm=isch&ijn=0&api_key=${process.env['SERPAPI_API_KEY']}`)
    .then(response => res.json(response.images_results[0].thumbnail))
})
 

module.exports = router;