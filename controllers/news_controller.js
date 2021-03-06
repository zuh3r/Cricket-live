const express = require('express')
const axios = require('axios')

const router = express.Router()


router.get('/', (req, res) => {
    console.log("Testing - route for NEWS")
    var query = 'cricket' 

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; if (mm < 10) mm = '0' + mm
    var yyyy = today.getFullYear();

    var date = `${yyyy}-${mm}-${dd-1}`
    axios.get(`https://newsapi.org/v2/top-headlines?category=sports&q=${query}&sortBy=date&apiKey=${process.env['NEWS_API_KEY']}`)
    //axios.get(`https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=date&apiKey=${process.env['NEWS_API_KEY']}`)
    .then(response => response.data) 
    .then(matches => {
        res.json(matches) 
    })
   
})

module.exports = router; 