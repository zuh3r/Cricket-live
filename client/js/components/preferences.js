function renderPreferences() {
    // event.preventdefault()
    document.querySelector('#page').innerHTML = `
        <section class="preferences">
            <h2>Preferences</h2>
            <p id="country">
                <span class="details">Country: </span>
                <button onClick="renderPreferenceEdit(event)">Edit</button>
            </p>
            <p id="tournament">
                <span class="details">Tournament: </span>
                <button onClick="renderPreferenceEdit(event)">Edit</button>
            </p>
            <p id="gender">
                <span class="details">Mens/Womens: </span>
                <button onClick="renderPreferenceEdit(event)">Edit</button>
            </p>
            <p id="match_type">
                <span class="details">Match Type: </span>
                <button onClick="renderPreferenceEdit(event)">Edit</button>
            </p>
            <p id="player">
                <span class="details">Player: </span>
                <button onClick="renderPreferenceEdit(event)">Edit</button>
            </p>
        </section>
    `
}


// country, tournament, gender, match_type, player

function renderPreferenceEdit(event) {    
    const editPreferenceField = event.target.closest('p')
    editPreferenceField.innerHTML = `
    <form action="" onSubmit="editPreference(event)">
        <label for="">${editPreferenceField.id}: </label><input type="text" name="${editPreferenceField.id}-edit"><button>Submit</button>
    </form>
    `
}

function editPreference(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    console.log(data)
    axios
        .put('/api/preferences', data)
}
