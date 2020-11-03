const apiKey = "cT6d6R6rPYiF5wP2jpkiwYEqNKHOpJwt";
let pathTrending = "http://api.giphy.com/v1/gifs/trending";
let cardsCtn = document.getElementById("trend-gif-ctn");
let cantidad = 5;

async function buscarTrends() {
    const path = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${cantidad}&offset=0&rating=g&lang=en`;
    let llamado = await fetch(path);
    let json = await llamado.json();
    cardsCtn.innerHTML = "";
    for (let i = 0; i < json.data.length; i++) {
        const element = json.data[i];
        let src = element.images.fixed_width.url;
        let card = document.createElement("div");
        card.className = "gif-card"
        card.innerHTML = `<img class="gif-trend" src="${src}" alt="GIFO-trending">`
        cardsCtn.appendChild(card)
        // console.log(card);
    }



}
buscarTrends();