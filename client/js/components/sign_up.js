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
    `
}

// Will send an axios post request along with sign-up data to users_controller.js
// route is 'api/users', might not need to be 
function signUp(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    axios
        .post('/api/users', data)
        .then(res => res.data)
        .then(() => renderHomePage())
}

