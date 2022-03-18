function renderAllNews() {
  document.querySelector(".newsSection").innerHTML = ` 
         
            <div class="news">
                ${renderNews()} 
            </div>  
    `;
}

var newsData = {};
function getNews() {
  console.log("Testing - getting NEWS");
  axios.get("/api/news").then((news) => {
    //console.log(news)
    newsData = news.data.articles;
    renderAllNews();
  });
}

function renderNews() {
  return newsData
    .slice(0, 1)
    .map(
      (news) =>
        `<article  class="news-article" news-url='${
          news.url
        }' onClick="openNewsLink(event)">  
            <span class="article-info">
                <h1>${news.title}</h1> 
                
                <h6>Author: ${news.author ? news.author : ""}</h6>
                <p>Published: ${news.publishedAt}</p>
                <span>Source: ${news.source.name}</span> 
            </span>
            <img src="${news.urlToImage}" alt="" class="img1" />
            <span class="news-p">${news.description}</span>
        </article>`
    )
    .join("");
}

function openNewsLink(event) {
  window.open(
    event.target.closest("article").getAttribute("news-url"),
    "_newtab"
  );
}
