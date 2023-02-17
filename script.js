const numberOne = document.querySelectorAll("li::before")
const firstPage = document.querySelector(".side-info")
console.log(firstPage);
console.log(numberOne);

for (let index = 0; index < numberOne.length; index++) {
    if (firstPage.style.display === "flex") {
        numberOne[0].style.backgroundColor = "black" 
    }  
}



   
        
        
       
    


