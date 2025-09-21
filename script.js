//  TAREAS
//      ver tema iframes para los proyectos

const infoSpans = document.querySelectorAll(".info");
const infoBtns = document.querySelectorAll(".proyectos-close-btn");
// const proyectosList = document.querySelectorAll(".proyecto");
const proyectoInfo = document.getElementById("proyecto-info");

// console.log(infoSpans);

function updateYearsOld(){
    const yoSpan = document.getElementById("years-old-span");
    
    const birthday = new Date("May 19, 2000 18:00:00");
    const dateNow = new Date();

    let currentYearsOld = 0;

    if (birthday.getMonth() !== dateNow.getMonth()) {
        currentYearsOld = dateNow.getFullYear() - birthday.getFullYear() - (1 * (birthday.getMonth() > dateNow.getMonth()? 1 : 0));
    } 
    else {
        currentYearsOld = dateNow.getFullYear() - birthday.getFullYear() - (1 * (birthday.getDay() <= dateNow.getDay()? 1 : 0));
    }
    
    yoSpan.textContent= `${currentYearsOld}`;
}
updateYearsOld();

function showInfo(index) {

    console.log("showInfo", index);

    // anim(proyectoInfo, "info-anim 0.5s ease 0s forwards");
    proyectoInfo.style.display = "block";

    // setTimeout(() => {
        infoSpans[index].style.display = "flex";
        // infoSpans[index].style.animation = "anim 1s ease-in-out 0s forwards";

    // }, 250)

}

for(let b of infoBtns) {
    b.addEventListener("click", () => {
        // anim(proyectoInfo, "info-anim 0.5s ease 0s reverse");
        proyectoInfo.style.display = "none";
        for(let span of infoSpans) {
            span.style.display = "none";
        }
    })
}

//aplica animaciones
const anim = (a, str) => {
    a.style.animation = "none";
    a.offsetHeight;
    a.style.animation = str;
}



// const form = document.querySelector("form");
const form = document.getElementById("contacto-form");
const mensajeEnviado = document.getElementById("mensaje-enviado");
const cargando = document.getElementById("cargando");
// console.log(form);

form.addEventListener("submit", (event) => {
    // anim(form[4], "input-button-anim 0.25s ease-in-out 0s forwards")

    for(let i = 4; i > 0; i--) {
        // anim(form.children[i], `form-anim 0.2s ease-in-out ${(5-i)/4}s forwards`);
        anim(form.children[i], `form-anim 0.2s ease-in-out 1.5s forwards`);
    }

    console.log("form 1 0",form.children[0]);

    setTimeout(() => {
        cargando.style.display = "block";
        cargando.style.animation = "cargando-anim 2s ease-in-out 0s 5";
    }, 1500)

    setTimeout(() => {
        cargando.style.display = "none";
        mensajeEnviado.style.display = "block";
        mensajeEnviado.style.animation = "mensaje-enviado-anim 0.3s ease-in-out 0s forwards";
    }, 12000)

        //si lo activas no manda el mail, sirve para testear :D 
    // event.preventDefault();
})



// RESPONSIVE ///////////////////////////////////////////////////////////


const responciveBtns = document.querySelectorAll(".responsive-btn");
const sections = document.querySelectorAll(".section");
for(let rb of responciveBtns) {
    rb.addEventListener("click", () => {
        for(let s of sections) {
            if(s.className === "section selected"){
                s.classList.remove("selected");
                anim(s, "responsive-open-anim 0.2s ease-in-out 0s forwards");
                setTimeout(()=>{
                    s.style.height = "10svh"
                }, 500);
                s.children[0].style.display = "block"
            };
        }

        rb.parentElement.classList.add("selected");
        // rb.parentElement.style.height = "80svh";
        anim(rb.parentElement, "responsive-open-anim 0.2s ease-in-out 0s forwards reverse");
        rb.style.display = "none";
    })
}
