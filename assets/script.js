fetch("https://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let img = document.createElement("img")
            img.setAttribute("src",data[i].image.medium)
            document.querySelector("body").appendChild(img)
        }
    })