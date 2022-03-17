// Kenny created file 16/3
function renderHeaderNav() {
    document.querySelector('#header-nav').innerHTML = `
        <header>
            <nav class="left-nav">
                <h2>Cricket-Live ⏚ <span id="welcome" class="welcome"></span></h2>
            </nav>
            <nav class="right-nav">
                <ul>
                    <li>News</li>
                    <li>Matches</li>
                    <li>Tournaments</li>
                    <li>Players</li>
                    <li onClick="render('signUp')">Sign Up</li>
                    <li onClick="render('login')">Login</li>
                </ul>
            </nav>
        </header>
    `
}

renderHeaderNav()

function render(component) {
    if (component === 'signUp') {
        renderSignUp()
    } else if (component === 'login') {
        renderLogin()
    }
}