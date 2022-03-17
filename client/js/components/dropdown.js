function renderWelcome(name, email) {
    document.querySelector('#welcome').innerHTML = `
        <p>Welcome back ${name}</p>
        <div class="dropdown">
            <button onClick="renderDropDown()" class="dropbtn">Menu</button>
            <div id="myDropdown" class="dropdown-content">
                <button onClick="renderMyAccount('${name}', '${email}')" class="my-acc-btn">My Account</button>
                <button onClick="renderPreferences()" class="pref-btn">Preferences</button>
                <button onClick="logout(event)">Logout</button>
            </div>
        </div>
    `
}

function renderDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Need to get
function logout(event) {
    event.preventDefault()
    axios
        .delete('/api/sessions')
        .then(res => console.log(res.message))
}