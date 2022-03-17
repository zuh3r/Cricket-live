// Kenny created file 16/3
function renderHeaderNav() {
    document.querySelector('#header-nav').innerHTML = `
        <ul>
            <li class="material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
            <li class="material-icons login-icon" onClick="render('login')">login</li>
        </ul>
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