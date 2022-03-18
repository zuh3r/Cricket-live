// Kenny created file 16/3
function renderHeaderNav(session = false) {
    document.querySelector('#header-nav').innerHTML = `
        <header>
            <nav class="left-nav">
                <h2>Cricket-Live ⏚ </span></h2>
            </nav>
            <nav class="right-nav">
                <ul>
                    <li>News</li>
                    <li>Matches</li>
                    <li>Tournaments</li>
                    <li>Players</li>
                    <li id="welcome" class="welcome"></li>
                    ${(!session)?
                        `<li onClick="render('signUp')">Sign Up</li>
                        <li onClick="render('login')">Login</li>`
                        :``
                    }
                </ul>
            </nav>
        </header>
    `
    renderFooter()
}

renderHeaderNav()

function render(component) {
    if (component === 'signUp') {
        renderSignUp()
    } else if (component === 'login') {
        renderLogin()
    }
}

function renderHomePage(){

    document.querySelector('#page').innerHTML = `
    <div class='newsSection'></div>
    <div class='tournamentsSection'></div>
    <div class='matchesSection'></div>
    `

    renderAllNews()
    renderTournaments(tournaments,5)
    renderMatches(matches)
}