const submit = document.querySelector('form input');
const tweet = document.querySelector('#tweet');
const tweetList = document.querySelector('#lista-tweets');

let storedTweets = JSON.parse(localStorage.getItem('tweets')) || [];




renderTweets();

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const contenidoTweet = tweet.value.trim();
    if (contenidoTweet) {
        guardarTweet(contenidoTweet);
        tweet.value = '';
    }
});

function guardarTweet(tweet) {
    storedTweets.push(tweet);
    const StringTweets = JSON.stringify(storedTweets);
    localStorage.setItem('tweets', StringTweets);
    renderTweets();
}

function renderTweets() {
    tweetList.innerHTML = '';

    storedTweets.forEach((tweet, index) => {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet-item');
        tweetDiv.innerHTML = `
            ${tweet}
            <button class="delete-tweet" data-index="${index}">Eliminar</button>
        `;
        tweetList.appendChild(tweetDiv);
    });

    document.querySelectorAll('.delete-tweet').forEach((button) => {
        button.addEventListener('click', eliminarTweet);
    });
}

function eliminarTweet(e) {
    const tweetIndex = e.target.getAttribute('data-index');
    storedTweets.splice(tweetIndex, 1);
    localStorage.setItem('tweets', JSON.stringify(storedTweets));
    renderTweets();
}