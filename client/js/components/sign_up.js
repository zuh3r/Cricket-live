// Kenny created file 16/3

// Sign up page will render on a section tag with id="page"
// Sign up page will have class="sign-up" for CSS
// On submit, calls the signUp(event) function declared below
function renderSignUp() {
    document.querySelector('#page').innerHTML = `
        <section class="sign-up">
            <form action="" onSubmit="signUp(event)">
                <h2>Sign Up:</h2>
                <fieldset>
                    <label for="">Name: </label><br>
                    <input type="text" name="name">
                </fieldset>
                <fieldset>
                    <label for="">Email: </label><br>
                    <input type="text" name="email">
                </fieldset>
                <fieldset>
                    <label for="">Password: </label><br>
                    <input type="password" name="password">
                </fieldset>
                <button>Sign Up</button>
            </form>
        </section>
        <footer class="sign-up-footer">
            <div class="footer-info">
                <h4>cricket-Live is a production of APKZ Digital Media - Code4Cash.</h4>
                <h4>© 2022 World Cricket.</h4>
                <h4>All rights reserved.</h4>
                <h4>Cricket-Live ⏚</h4>
            </div>
            <div class="footer-icons">
                <span>Contact</span>
                <span>Facebook</span>
                <span>Instagram</span>
                <span>Youtube</span>
            </div>
        </footer>
    `
}

// Will send an axios post request along with sign-up data to users_controller.js
// route is 'api/users', might not need to be 
function signUp(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    console.log(data)
    axios
        .post('/api/users', data)
        .then(res => res.data)
        .then(userName => console.log(userName))
}

