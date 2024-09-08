

const btn = document.querySelector('.btn');
let spot = document.querySelector('.joke');
// create https connection object
const xhr = new XMLHttpRequest();

function getJoke() {
    // make a server request for json object
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    // fetch response
    xhr.onreadystatechange = function() {
        console.log(this.status);
        console.log(this.readyState);
        // if the response is good
        if (this.readyState === 4 && this.status === 200) {
            // retrieve the json item
            const data = JSON.parse(this.responseText);
            console.log(data);
            spot.innerHTML = `<em>${data.value}</em>`;
        }
    };
    // this sends the request to server
    xhr.send();
}

document.addEventListener('DOMContentLoaded', getJoke);

btn.addEventListener('click', getJoke);