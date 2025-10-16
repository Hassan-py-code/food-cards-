
let addDiv = document.querySelector(".add-text");
let buttons = document.getElementById("button");
let image = document.getElementsByClassName("image-eat")[0];

// Array of random phrases and custom colors
const moroccanPhrases = [
    "  بصحة و الراحة! أمولات سكسو 😋", 
    "كسكسو ديال الجمعة! 🕌", 
    "شهيبة طيبة ار ديك معلقة 🍲", 
    "غادي إكون سكسو 😁", 
    " الله إعطيك الصحة سكسو جا بنين✨" 
];

const moroccanColors = [
    '#C11F36', // Deep Red
    '#105B2D', // Deep Green
    '#B8860B', // Gold/Brass
    '#25567B', // Moroccan Blue
    '#E7DAB7'  // Sand/Beige
];

// Initialize Confetti
const jsConfetti = new JSConfetti();

buttons.addEventListener('click', () => {
    
    jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 500,
        confettiColors: moroccanColors, 
    });

    image.style.backgroundImage = "url('foods.png')";
    image.style.backgroundSize = "cover";

    // 3. Get a random phrase for the text
    const randomIndex = Math.floor(Math.random() * moroccanPhrases.length);
    const randomText = moroccanPhrases[randomIndex];
    
    let creatP = document.createElement("p");
    creatP.innerText = randomText;
    
    addDiv.appendChild(creatP);

    setTimeout(() => {

        image.style.backgroundImage = "none"; 
        creatP.remove(); 
    }, 2000); 
});


