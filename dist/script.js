document.addEventListener("DOMContentLoaded", function() {

  let hello = document.getElementById("hello-link")
  hello.onclick = function() {
    alert("Hello world from JavaScript!")
  }

  let jokeBtn = document.getElementById("joke-button")
  jokeBtn.onclick = function() {
    let showJoke = document.getElementById("joke-display")
    showJoke.textContent = "Getting a joke..."
    fetch("https://icanhazdadjoke.com/", {
      headers: {"Accept": "text/plain"}
    })
    .then(function(res) {
      return res.text()
    })
    .then(function(joke) {
      showJoke.textContent = joke
    })
  }

  let form = document.getElementById("lineupForm")
  form.onsubmit = function(event) {
    event.preventDefault()

    let status = document.querySelector('input[name="status"]:checked').value
    let date = document.getElementById("gameDate").value

    let players = []
    let checkboxes = document.querySelectorAll('input[name="player"]:checked')
    for (let i = 0; i < checkboxes.length; i++) {
      players.push(checkboxes[i].value)
    }

    let text = "Status: " + status + " | Date: " + date + " | Players: " + players.join(", ")
    document.getElementById("output").textContent = text
  }
})
