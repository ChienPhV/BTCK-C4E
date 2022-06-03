

function onReady() {
        var qrcode = new QRCode("id_qrcode", {
          text: "file:///D:/CHIEN%20PV/Mindx/C4E/BTCK/Destop9.html",
          width: 300,
          height: 300,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H,
        });
      }

      var button = document.getElementById("btn-download");
      button.addEventListener("click", function (e) {
        var dataURL = canvas.toDataURL("image/png");
        button.href = dataURL;
      });

document.addEventListener("click" , function() {
    const card = document.getElementsByClassName("tag");
    window.location.replace(card);
    onReady();
})