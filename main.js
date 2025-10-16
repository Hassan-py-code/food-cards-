
let addDiv=document.querySelector(".add-text");
let buttons=document.getElementById("button");
let image=document.getElementsByClassName("image-eat")[0];



// import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti();

buttons.addEventListener('click', () => {
    jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 500,
    });
     
    image.src = "foods.png";

    let creatP = document.createElement("p");
    creatP.innerText = "غادي إكون سكسو 😁";
   
    
    addDiv.appendChild(creatP); // Append the element first

    setTimeout(() => {
        // CORRECT: Call removeChild() on the parent (addDiv)
        image.src="";
        addDiv.removeChild(creatP); 
    }, 5000); 
});



