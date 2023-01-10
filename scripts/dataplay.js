export const videoPlay = [];
let boxPlay = sessionStorage.setItem("boxPlay", JSON.stringify(videoPlay));
        boxPlay = JSON.parse(sessionStorage.getItem("boxPlay"));
        console.log(boxPlay); 