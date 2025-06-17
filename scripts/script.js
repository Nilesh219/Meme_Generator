const memeContainer = document.getElementById('meme-container');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', fetchMeme);

async function fetchMeme() {
    try {
        const response = await fetch('https://meme-api.com/gimme');
        const data = await response.json();

        memeContainer.innerHTML = `
                    <img src="${data.url}" alt="Random Meme">
                    <div class="meme-info">
                        <p><strong>Title:</strong> ${data.title}</p>
                        <p><strong>Subreddit:</strong> r/${data.subreddit}</p>
                    </div>
                `;
    } catch (error) {
        memeContainer.innerHTML = `<p>Failed to load meme. Try again!</p>`;
        console.error(error);
    }
}