const infoSpans = document.querySelectorAll(".info");
// const proyectosList = document.querySelectorAll(".proyecto");
const proyectoInfo = document.getElementById("proyecto-info");

console.log(infoSpans);

function showInfo(index) {

    anim(proyectoInfo, "info-anim 0.5s ease 0s forwards");

    setTimeout(() => {
        for(let span of infoSpans) {
            span.style.display = "none";
        }
    
        infoSpans[index].style.display = "flex";
    }, 250)

}

//aplica animaciones
const anim = (a, str) => {
    a.style.animation = "none";
    a.offsetHeight;
    a.style.animation = str;
}