class Myheader extends HTMLElement
{
    connrctedCallback() {
        this.innerHTML =`
        <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" media="screen" href="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  
</head>
<style>
  .navbar-inverse {
    background-color: #FFA0A0;
    border-color: #FFA0A0;
}
.container-fluid {
    width: 95%;
    background-color: #FFA0A0;
    margin: 0 auto;
    margin: 0px 23px;
}
i#logo-nav {
    margin: 0px 23px;
    font-size: 29.34px;
    height: 32px;
}
</style>
<body>
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <img src="./Assets/logo-Transparent.png" alt="logo" width="auto" height="50px">
                <span style="color: #FFFF ;">NameCARD</span>
              </div>
             
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><i id="logo-nav" class="far fa-bell"></i></span></a></li>
                <li><a href="#"><i id="logo-nav" class="far fa-address-card"></i></span> </a></li>
                <li><a href="#"><i id="logo-nav" class="far fa-minus-square"></i></span> </a></li>
                <li><a href="#"><i id="logo-nav" class="fas fa-qrcode"></i></i></span> </a></li>
              </ul>
            </div>
          </nav>
    </header>

    
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">

        `
     }

}

customElements.define('my-header', Myheader)