function openPlayerConfig(event) {
    
    editedPlayer = +event.target.dataset.playerid;

    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';


}

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    requestPlayerName.style.display = 'none';

    formElement.firstElementChild.classList.remove('error');
    configErrorsOutput.textContent = '';
    document.getElementById('playername').value = '';

}

function savePlayerConfig(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error')
        configErrorsOutput.textContent = 'Please entera valid Name!!';
        return;
    }


    const updatedPlayerDataElement = document.getElementById(`player${editedPlayer}-data`);
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}