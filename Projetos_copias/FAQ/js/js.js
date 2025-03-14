const caixa1 = document.getElementById("btn1");
const caixa2 = document.getElementById("btn2");
const caixa3 = document.getElementById("btn3");
const caixa4 = document.getElementById("btn4");
const mais1 = document.getElementById("img1");
const mais2 = document.getElementById("img2");
const mais3 = document.getElementById("img3");
const mais4 = document.getElementById("img4");


caixa1.addEventListener("click", ()=>{
    document.getElementById("expande1").classList.toggle("exp");
    if(mais1.src.match("css/img/mais.png")){
        mais1.src = "css/img/menos.png";
        document.getElementById('linha').style.visibility = 'hidden';
    } else {
        mais1.src = "css/img/mais.png";
        document.getElementById('linha').style.visibility = 'visible';
    }
});

caixa2.addEventListener("click", ()=>{
    document.getElementById("expande2").classList.toggle("exp");
    if(mais2.src.match("css/img/mais.png")){
        mais2.src = "css/img/menos.png";
        document.getElementById('linha2').style.visibility = 'hidden';
    } else {
        mais2.src = "css/img/mais.png";
        document.getElementById('linha2').style.visibility = 'visible';
    }
});

caixa3.addEventListener("click", ()=>{
    document.getElementById("expande3").classList.toggle("exp");
    if(mais3.src.match("css/img/mais.png")){
        mais3.src = "css/img/menos.png";
        document.getElementById('linha3').style.visibility = 'hidden';
    } else {
        mais3.src = "css/img/mais.png";
        document.getElementById('linha3').style.visibility = 'visible';
    }
});

caixa4.addEventListener("click", ()=>{
    document.getElementById("expande4").classList.toggle("exp");
    if(mais4.src.match("css/img/mais.png")){
        mais4.src = "css/img/menos.png";
    } else {
        mais4.src = "css/img/mais.png";
    }
});