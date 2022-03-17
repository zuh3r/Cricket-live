function renderAllNews(){ 
    document.querySelector('#page').innerHTML += `
        <section class="news">
            <ul>
                ${renderNews()}
            </ul>
        </section>
    `
} 

var newsData = {}
function getNews(){
    console.log('Testing - getting NEWS')
    axios.get('/api/news')  
        .then(news => {
            console.log(news)
            newsData = news.data.articles
            renderAllNews()
        }) 
    

}


function renderNews(){

    
    return newsData.map( news => 
        `<li news-url='${news.url}'>
            <h2>
                ${news.title}
            </h2> 
            <img src='${news.urlToImage}'/>
            <p>${news.author}</p>
            <p>${news.publishedAt}</p>
            <span>${news.source.name}</span>
            <p>${news.content}</p>
            <p>${news.description}</p>
        </li>`

    ).join('')

 
}