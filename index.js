const featureVar = document.getElementById("box1");
const companyVar = document.getElementById("box2");
const imgUp1 = document.getElementById('imgup1');
const imgUp2 = document.getElementById('imgup2');
const imgD1 = document.getElementById('imgd1');
const imgD2 = document.getElementById('imgd2');


document.getElementById("feature").addEventListener("click", feature);
let box1 = true;
function feature() {
    if (box1){
        imgUp2.style.display = 'none';
        imgD2.style.display = 'block';

        imgUp1.style.display = 'block';
        imgD1.style.display = 'none';
        featureVar.style.display = 'block';
        companyVar.style.display = 'none';
        box1 = false;
        box2 = true;
    }
    else{
        imgUp1.style.display = 'none';
        imgD1.style.display = 'block';
        featureVar.style.display = 'none';
        box1 = true;
    }
}
document.getElementById("company").addEventListener("click", company);
let box2 = true;
function company() {
    if (box2){
        imgUp1.style.display = 'none';
        imgD1.style.display = 'block';

        imgUp2.style.display = 'block';
        imgD2.style.display = 'none';
        companyVar.style.display = 'block';
        featureVar.style.display = 'none';
        box1 = true;
        box2 = false;
    }
    else{
        imgUp2.style.display = 'none';
        imgD2.style.display = 'block';
        companyVar.style.display = 'none';
        box2 = true;
    }
}
document.getElementById('menu').addEventListener("click" , menu); 
document.getElementById('close-icon').addEventListener("click" , close);
const popup = document.getElementById('popup');
function menu(){
    popup.style.width = "100%";
}
function close(){
    popup.style.width = "0";
    
}

const popfeatureVar = document.getElementById("popbox1");
const popcompanyVar = document.getElementById("popbox2");
const popimgUp1 = document.getElementById('pop-imgup1');
const popimgUp2 = document.getElementById('pop-imgup2');
const popimgD1 = document.getElementById('pop-imgd1');
const popimgD2 = document.getElementById('pop-imgd2');
document.getElementById('pop-feature').addEventListener("click" , popfea);
let popbox1 = true;
const popbox = document.getElementById('popbox');
function popfea(){
    if (popbox1){
        popimgUp1.style.display = 'block';
        popimgD1.style.display = 'none';
        popfeatureVar.style.display = 'block';
        popbox1 = false;
    }
    else{
        popimgUp1.style.display = 'none';
        popimgD1.style.display = 'block';
        popfeatureVar.style.display = 'none';
        popbox1 = true;
    }
}

document.getElementById("p-company").addEventListener("click", popcompany);
let popbox2 = true;
function popcompany() {
    if (popbox2){
        popimgUp2.style.display = 'block';
        popimgD2.style.display = 'none';
        popcompanyVar.style.display = 'block';
        popbox2 = false;
    }
    else{
        popimgUp2.style.display = 'none';
        popimgD2.style.display = 'block';
        popcompanyVar.style.display = 'none';
        popbox2 = true;
    }
}
const theme = document.getElementById('theme');
theme.addEventListener("click" , change);
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const overlay = document.getElementById('overlay');
const heading = document.getElementById('heading');
const text = document.getElementById('text');
const button = document.getElementById('button');
let color = true;
function change(){
    if(color){
        overlay.style.backgroundColor = "#141414";
        heading.style.color = "#fff";
        text.style.color = "#fff";
        button.style.backgroundColor = "#fafafa";
        button.style.color = "#141414";
        color = false;
        sun.style.display = "block";
        moon.style.display = "none";
        theme.style.backgroundColor = '#fff';
    }
    else{
        overlay.style.backgroundColor = "#fafafa";
        heading.style.color = "#141414";
        text.style.color = "#141414";
        button.style.backgroundColor = "#141414";
        button.style.color = "#fff";
        color = true;
        sun.style.display = "none";
        moon.style.display = "block";
        theme.style.backgroundColor = '#6bffbc';
    }
}
