// All 
var All = document.getElementById("all");

// Phone 
var Phone0 = document.getElementById("acPhone");
var Phone1 = document.getElementById("phone1");
var Phone2 = document.getElementById("phone2");
var Phone3 = document.getElementById("phone3");
var Phone4 = document.getElementById("phone4");

// Lapp
var Lapp0 = document.getElementById("acLapp");
var Lapp1 = document.getElementById("lapp1");
var Lapp2 = document.getElementById("lapp2");
var Lapp3 = document.getElementById("lapp3");
var Lapp4 = document.getElementById("lapp4");


function Phone() {
    Lapp1.style.display = 'none';
    Lapp2.style.display = 'none';
    Lapp3.style.display = 'none';
    Lapp4.style.display = 'none';
    Phone1.style.display = '';
    Phone2.style.display = '';
    Phone3.style.display = '';
    Phone4.style.display = '';


    Phone0.classList.add("active");
    All.classList.remove("active");
    Lapp0.classList.remove("active")


}

function Lapp() {
    Lapp1.style.display = '';
    Lapp2.style.display = '';
    Lapp3.style.display = '';
    Lapp4.style.display = '';
    Phone1.style.display = 'none';
    Phone2.style.display = 'none';
    Phone3.style.display = 'none';
    Phone4.style.display = 'none';

    Lapp0.classList.add("active");
    All.classList.remove("active");
    Phone0.classList.remove("active")


}

function All0() {
    Lapp1.style.display = '';
    Lapp2.style.display = '';
    Lapp3.style.display = '';
    Lapp4.style.display = '';
    Phone1.style.display = '';
    Phone2.style.display = '';
    Phone3.style.display = '';
    Phone4.style.display = '';

    All.classList.add("active");
    Lapp0.classList.remove("active");
    Phone0.classList.remove("active")


}