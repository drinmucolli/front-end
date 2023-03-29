const search = document.querySelector("button");
const input = document.querySelector("input");
const title = document.querySelector("h1");
const image = document.querySelector("img");
const desc = document.querySelector("p");

search.addEventListener("click", () => {
    const date = input.value;

    fetch(`https://api.nasa.gov/planetary/apod?api_key=IpHwR1K4gIOUdRtZyEmWrq9l5GcxPNlz7pE8sqKk&date=${date}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            title.textContent = data.title
            desc.textContent = data.explanation
            image.src = data.hdurl

        })
        .catch(error => {
            console.log(error);
        })

})
