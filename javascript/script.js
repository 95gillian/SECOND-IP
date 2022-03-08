let date = document.getElementById('date');

let month = document.getElementById('month');

let year = document.getElementById('year');

let genders = document.getElementById('gender')

const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",]

const femaleAkanNames =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

const gender = ['male','female']

function myFunction() {

    let date= new date(year.value + ',' + month.value + ',' + date.value);

    if (yourName.value === '' || yourName.value == null){
        alert('please input name')
    }
    else if(date.value === '' || date.value == null && month.value === '' || month.value == null && year.value === '' || year.value == null){
        if(date.value == null || month.value == null || year.value == null){
            alert('please input date')
        }
