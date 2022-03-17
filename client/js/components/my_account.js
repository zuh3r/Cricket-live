function renderMyAccount(name, email) {
    console.log('render my account')
    // event.preventdefault()
    document.querySelector('#page').innerHTML = `
        <section class="my-account">
            <h2>My Account</h2>
            <p id="Name">
                <span class="details">Name: </span>${name}
                <button onClick="renderEdit(event)">Edit</button>
            </p>
            <p id="Email">
                <span class="details">Email: </span>${email}
                <button onClick="renderEdit(event)">Edit</button>
            </p>
        </section>
    `
}

function renderEdit(event) {    
    const editField = event.target.closest('p')
    editField.innerHTML = `
        <form action="" onSubmit="editUser(event)">
            <label for="">${editField.id}: </label><input type="text"><button onClick="edit">Submit</button>
        </form>
    `
}

function editUser(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    axios
        .put('/api/users', data)
}