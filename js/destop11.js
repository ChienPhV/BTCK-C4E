//declearing html elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');
const x=document.querySelector("profilePic");

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});


//when we choose a photo to upload

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
        x=reader.readAsDataURL(choosedFile);

    }
});

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}


var btn = document.querySelector("#btn")
btn.onclick = function(){
    var div = document.createElement("div")
    div.innerHTML = generateIt()
    document.getElementById("box").appendChild(div)
}

function generateIt() {
    return "<input id='enter' type ='url'><button id='clear' class='remove' onclick='removeIt(this)'>Remove</button>"
}

function removeIt(btn){
document.getElementById("box").removeChild(btn.parentNode)
}
