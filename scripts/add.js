
import { videos } from "/scripts/data.js";

const form = document.getElementById('form');
console.log(form);

let boxVideo = sessionStorage.getItem("boxVideo") ? JSON.parse(sessionStorage.getItem("boxVideo")) : [];
console.log(boxVideo);


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const valuesForm = Object.values(form);
    console.log(valuesForm);

    const newValueInfo = {};
    valuesForm.forEach((valueInput) => {
        if(valueInput.id){
            newValueInfo[valueInput.id] = valueInput.value;
        }
    });
    console.log(newValueInfo);

    
    videos.push(newValueInfo);
    console.log(videos);
    
    
    
    sessionStorage.setItem("boxVideo", JSON.stringify(videos));
    boxVideo = JSON.parse(sessionStorage.getItem("boxVideo"));
    console.log(boxVideo);
     

    valuesForm.forEach(input => {
        if(input.id){
            input.value = "";
        }
    })

})