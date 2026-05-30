const screens = document.querySelectorAll(".screen");

function showScreen(index){
    screens.forEach(screen=>{
        screen.classList.remove("active");
    });

    screens[index].classList.add("active");
}

function startStory(){

    showScreen(1);

    setTimeout(()=>{
        showScreen(2);
    },3000);

    setTimeout(()=>{
        showScreen(3);
    },15000);

    setTimeout(()=>{
        showScreen(4);
    },25000);

    setTimeout(()=>{
        showScreen(5);
    },35000);
}

const images = [
    "Naila1.jpg",
    "Naila2.jpg",
    "Naila3.jpg",
    "Naila4.jpg",
    "Naila5.jpg"
];

let currentImage = 0;

setInterval(()=>{

    const slider = document.getElementById("slider");

    if(!slider) return;

    currentImage++;

    if(currentImage >= images.length){
        currentImage = 0;
    }

    slider.src = images[currentImage];

},3000);
