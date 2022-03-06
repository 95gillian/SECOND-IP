 document.getElementById("button").onclick = function(yourAkanName){
     let date = document.getElementById("input1").value;
     let gender = document.getElementsByName("gender").value;
     
     function getGender() {
         for (let gender of genders){
             if(gender.checked){
                 return gender.value
             }
         }
     }
     let myGenderValue =getGender();
     alert(myGenderValue);
     
     function dateValidator() {
         if (monthOfBirth === && Number(yearOfBirth)%4 === 0){
             if (dayOfBirth > 28 or dayOfBirth < 1 ){
                 return false;}

                 else if (monthOfBirth === 2 && dayOfBirth >29){
                     return false;}

                     else if (monthOfBirth === 2 && dayOfBirth < 1){
                         return false;}

                         else {
                             return true;
                         }
                        
                         let monthValid = monthValidator();
                         let dayValid = dayValidator();

                         let dayOfweekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+((5*Number(yearOfBirth.slice(2,4))/4))((26*(monthOfBirth+1)/10))+dayOfBirth)%7)
                         let maleAkanNames = ["kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
                         let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
                     


                 
                 

             
         }
     }
 }