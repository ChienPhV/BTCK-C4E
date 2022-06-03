// Đây là function Hiện ra thông tin đã lưu trong localstage
function render(){
    let listLink = localStorage.getItem("list-Link") ? JSON.parse(localStorage.getItem("list-Link")) : []

      table = `
      `
      listLink.map((value ,index) => {
        table += `
        <div class="tag">
    <img class="profile" src="./Assets/Group2.png" alt="profile" />
    <h3>Card No.${index +1}</h3>
    <div class="buttonContainer">

    <button  onclick="editemiu(${index})" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Update</button>
    <button  onclick="editqrcode(${index})"type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
QRCODE
</button>
      <button onclick="deleteiuem(${index})"  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Delete
</button>
    </div>
  </div>
  
      `
      
    });
      document.getElementById("render").innerHTML = table
  }
  

// đây là function add Link
 function add(){
    let Linkmxh = document.getElementById("Linkmxh").value
    let listLink = localStorage.getItem("list-Link") ? JSON.parse(localStorage.getItem("list-Link")) : []
    listLink.push({
        Linkmxh:Linkmxh
    })
    localStorage.setItem("list-Link",JSON.stringify(listLink))
    render()
}

// đây là function lấy id chỉ đến link của update
function editemiu(index){
    let listLink = localStorage.getItem("list-Link") ? JSON.parse(localStorage.getItem("list-Link")) : []
    document.getElementById("Linkmxh").value=listLink[index].Linkmxh
    document.getElementById("index").value=index
    console.log(index)
 } 
 // đây là function lấy id chỉ đến link của qrcode
 function editqrcode(index){
  let listLink = localStorage.getItem("list-Link") ? JSON.parse(localStorage.getItem("list-Link")) : []
  document.getElementById("Linkmxhqr").value=listLink[index].Linkmxh
  document.getElementById("index").value=index
  console.log(index)
} 

 // function update
 function changemiu() {
    let listLink =localStorage.getItem("list-Link") ? JSON.parse(localStorage.getItem("list-Link")) : []
    let index = document.getElementById("index").value

    listLink[index]={
        Linkmxh:document.getElementById("Linkmxh").value
    }
    localStorage.setItem("list-Link",JSON.stringify(listLink))
    console.log(listLink)
        render()
  }

  

 // function delete
  function deleteiuem (index){
    let listLink =localStorage.getItem("list-Link") ? JSON.parse(localStorage.getItem("list-Link")) : []
    listLink.splice(index ,1)
    localStorage.setItem("list-Link",JSON.stringify(listLink))
    render()
  }

 // function nút nhập qr code
  function QRCODE(){
    const wrapper =document.querySelector(".wrapper"),
    qrInput =  wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img")
    
    
    generateBtn.addEventListener("click",()=>{
        let qrValue = qrInput.value;
        if(!qrValue) return;
        qrImg.src= ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
        wrapper.classList.add(qrValue)
    
    });
    
    }