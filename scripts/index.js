import { videoPlay } from "../scripts/dataplay.js";
import { videos } from "../scripts/data.js";


let boxPlay = sessionStorage.getItem("boxPlay") ? JSON.parse(sessionStorage.getItem("boxPlay")) : [];
let boxVideo = sessionStorage.getItem("boxVideo") ? JSON.parse(sessionStorage.getItem("boxVideo")) : [];

const printVideos = (listVideos, container) => {
    container.innerHTML = "";
    listVideos.forEach((boxVideo) => {
        const articleNew = document.createElement('article');
        articleNew.setAttribute('id', 'nuevoArticle');
        
        articleNew.innerHTML = `<figure class="card__image">
        <img src=${boxVideo.thumbnail} alt="Miniatura de video" class="thumbnail__video">
        <h1 class="title__video">${boxVideo.title}</h1>
        <h4 class="description__video">${boxVideo.chanel}</h4>
        <h4 class="description__video">${boxVideo.views}</h4>
    </figure>`; 
        



    container.appendChild(articleNew);
    });
}

const containerPrint = document.getElementById("containerCards");
console.log(containerPrint);

document.addEventListener("DOMContentLoaded", () => {
    //Estaba aqui el sessionStorage del inicio.
    if(boxVideo.length === 0){
        sessionStorage.setItem("boxVideo", JSON.stringify(videos));
        boxVideo = JSON.parse(sessionStorage.getItem("boxVideo"));
        console.log(boxVideo);
    } 
    
    printVideos(boxVideo, containerPrint);
})

// Funcionalidad de Clickear cards de videos.


containerPrint.addEventListener('click', event => {
    if(event.target.matches('#nuevoArticle')){
        sessionStorage.getItem("boxVideo");
        const index = Array.from(containerPrint.children).indexOf(event.target);
        console.log(boxVideo[index]);
        
        videoPlay.push(boxVideo[index]);
        
        console.log(videoPlay);
        const newInfo = {};
        const valuesInfo = Object.values(videoPlay);
        valuesInfo.forEach((value) =>{
            newInfo[value.id] = value.value;
        })
        console.log(valuesInfo);
        boxPlay.push(videoPlay);
        console.log(boxPlay);
        boxPlay.push(valuesInfo);
        sessionStorage.setItem("boxPlay", JSON.stringify(videoPlay));

        window.location = "../pages/iframe.html";  
        
        sessionStorage.setItem("boxPlay", JSON.stringify(videoPlay));
        boxPlay = JSON.parse(sessionStorage.getItem("boxPlay"));
        console.log(boxPlay); 
        
    }
})



const btnAll = document.getElementById('btnAll');
const btnProgramming = document.getElementById('btnProgramming');
const btnMusic = document.getElementById('btnMusic');
const btnDesign = document.getElementById('btnDesign');

const btnFilter = [btnAll, btnMusic, btnProgramming, btnDesign];

btnFilter.forEach((button) => {
    button.addEventListener('click', (event) => {
        let videosFilter = [];
        if(button.id === 'btnAll'){
            videosFilter = boxVideo;
        }
        else{
            videosFilter = boxVideo.filter((el) => el.tipo ===  button.id);
            console.log(videosFilter);
        }
        printVideos(videosFilter, containerPrint);
    })
})
