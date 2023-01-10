
let boxVideo = sessionStorage.getItem("boxVideo") ? JSON.parse(sessionStorage.getItem("boxVideo")) : [];

let boxPlay = sessionStorage.getItem("boxPlay") ? JSON.parse(sessionStorage.getItem("boxPlay")) : [];


const printIframe = (listVideos, container) => {
    listVideos.forEach((boxPlay) => {
        const newiframe = document.createElement('article');
        newiframe.innerHTML = `<iframe src="${boxPlay.video}" class="iframe"></iframe>
        <h1 class="title__video">${boxPlay.title}</h1>
        <h4 class="description__video">${boxPlay.views}</h4>`;
        container.appendChild(newiframe);
        console.log(newiframe);
    });
}

const containerIframe = document.getElementById('containerMain');
console.log(containerIframe);

document.addEventListener("DOMContentLoaded", () => {
    if(boxPlay.length === 0){
        sessionStorage.setItem("boxPlay", JSON.stringify(videoPlay));
        boxPlay = JSON.parse(sessionStorage.getItem("boxPlay"));
    } 

    if(boxVideo.length === 0){
        sessionStorage.setItem("boxVideo", JSON.stringify(videos));
        boxVideo = JSON.parse(sessionStorage.getItem("boxVideo"));
    } 
    
    printIframe(boxPlay, containerIframe);
    printOthers(boxVideo, containerOthers);
})



//--------> Ahora vamos a realizar el print de cartas others --------

const containerOthers = document.getElementById('containerMix');
console.log(containerOthers);

const printOthers = (listVideos, container) => {
    listVideos.forEach((boxVideo) => {
        const newArticle = document.createElement('article');
        newArticle.innerHTML = `<figure class="card__image">
        <img src="${boxVideo.thumbnail}" alt="Miniatura de video" class="thumbnail__video">
        <div class="container__information">
            <h1 class="title__video__iframe">${boxVideo.title}</h1>
            <h4 class="description__video__iframe">${boxVideo.chanel}</h4>
            <h4 class="description__video__iframe">${boxVideo.views}</h4>
        </div>
    </figure>`;
    container.appendChild(newArticle);
    
});
}

