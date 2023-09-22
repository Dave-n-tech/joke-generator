
const joke = document.querySelector("p")
const button = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single"

 
const getjoke = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            joke.textContent = `${data.joke}`
            console.log(data.joke)
        })
        .catch(err => console.log(err))
}

button.addEventListener("click", getjoke)
getjoke()