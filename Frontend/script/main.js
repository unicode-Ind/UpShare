const dropZone = document.querySelector(".drop-zone");
const browseBtn = document.querySelector(".browse-btn");
const fileInput = document.querySelector("#file-input");

const baseURL = "https://innshare.herokuapp.com";
const uploadURL = `${baseURL}/api/files`;

dropZone.addEventListener("dragover" , (e)=>{
    // console.log("helloooooooooo");
    e.preventDefault();

    if(!dropZone.classList.contains("dragged-icon-container")){
        dropZone.classList.add("dragged-icon-container");
    }
});

dropZone.addEventListener("dragleave" , ()=>{
    // console.log("helloooooooooo");
    dropZone.classList.remove("dragged-icon-container");
});

dropZone.addEventListener("drop" , (e)=>{
    e.preventDefault();
    dropZone.classList.remove("dragged-icon-container");

    const files = e.dataTransfer.files; 
    // console.log(files);

    if(files.length){
        fileInput.files = files;
        uplaodFiles();
    }
});

browseBtn.addEventListener("click" , ()=>{
    fileInput.click();    
});

const uplaodFiles = ()=>{
    const file = fileInput.files[0];
    const formData = new FormData;
    formData.append("myfile",file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState == XMLHttpRequest.DONE){
            console.log(xhr.response);
        }
        
    };

    xhr.open('POST', uploadURL);
    xhr.send(formData);

}