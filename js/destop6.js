//declearing html elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');
const x = document.querySelector("profilePic");

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function () {
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function () {
    uploadBtn.style.display = "none";
});


//when we choose a photo to upload

file.addEventListener('change', function () {
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
        x = reader.readAsDataURL(choosedFile);

    }
});


save(e);
function save(e) {
    event.preventDefault()
    if (document.getElementById("nickname").value && document.getElementById("DOB").value && document.getElementById("catchphrase").value !== "") {
        localStorage.nickname = document.getElementById("nickname").value
        localStorage.DOB = document.getElementById("DOB").value;
        localStorage.catchphrase = document.getElementById("catchphrase").value;

    } else {
        localStorage.nickname = "";
        localStorage.DOB = "";
        localStorage.catchphrase = "";
    }
    document.getElementById("nick").innerHTML = localStorage.nickname;
    document.getElementById("dob").innerHTML = localStorage.DOB;
    document.getElementById("catch").innerHTML = localStorage.catchphrase;
    document.getElementById("nickname").remove();
    document.getElementById("DOB").remove();
    document.getElementById("catchphrase").remove();
    document.getElementById("x").style.opacity=0;
    document.getElementById("x").style.marginLeft="20%";
}


