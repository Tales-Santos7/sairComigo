const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartLoader = document.getElementById("heartLoader");
const container = document.getElementById("container");
const resultContainer = document.getElementById("resultContainer");
const questionContainer = document.getElementById("questionContainer");

noBtn.addEventListener("mouseover", () => {
    const newX = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const newY = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
    heartLoader.style.display = "block";
    
    setTimeout(() => {
        container.style.display = "none";
        heartLoader.style.display = "none";
        resultContainer.style.display = "block";
    }, 3000);
});
