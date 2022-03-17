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
            //console.log(news)
            newsData = news.data.articles
            renderAllNews()
        }) 
    

}


function renderNews(){

    
    return newsData.map( news => 
        `<li news-url='${news.url}'>

            <article class="news-article">
                <h1>${news.title}</h1>
                <span class="article-info">
                    <h4>${news.content}</h4>
                    <h6>Author: ${(news.author)?news.author:''}</h6>
                </span>
                <img src="${news.urlToImage}" alt="" class="img1" />
                <p class="news-p">${news.description}</p>
                <p>Published: ${news.publishedAt}</p>

                <span>Source: ${news.source.name}</span>
            </article>


        </li>`

    ).join('')

 
}




// <h2>
// ${news.title}
// </h2> 
// <img src='${news.urlToImage}'/>
// <p>${news.author}</p>
// <p>${news.publishedAt}</p>
// <span>${news.source.name}</span>
// <p>${news.content}</p>
// <p>${news.description}</p>