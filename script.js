/* NavBar Section */
var flag = false;
document.querySelector(".menu").addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".navbar1").style.right = "0px";
    document.querySelector("html").style.overflow = "hidden";
    flag = true;
});
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".navbar1").style.right = "-800px";
     document.querySelector("html").style.overflow = "";
    flag = false;
});
var obs = new ResizeObserver(() => {
    if (getComputedStyle(document.querySelector(".link")).display === "block") {
        document.querySelector(".navbar1").style.right = "-800px";
         document.querySelector("html").style.overflow = "";
    }
    else if (flag === true) {
        document.querySelector(".navbar1").style.right = "0px";
        document.querySelector("html").style.overflow = "hidden";
    }
})
obs.observe(document.querySelector(".link"));

document.addEventListener("click", (e) => {
    if (!(document.querySelector(".navbar1").contains(e.target))) {
        document.querySelector(".navbar1").style.right = "-800px";
         document.querySelector("html").style.overflow = "";
        flag = false;
    }
})

for (let i = 0; i < document.querySelectorAll(".li1>a").length; i++) {
    document.querySelectorAll(".li1>a")[i].addEventListener("click", () => {
        document.querySelector(".navbar1").style.right = "-800px";
         document.querySelector("html").style.overflow = "";
        flag = false;
    });
}

/*Certification*/
var pathFile = [
    "./CertificationImages/DataVisualization.png",
    "./CertificationImages/Java.png",
    "./CertificationImages/MainFlow.png",
    "./CertificationImages/Octanet.png",
    "./CertificationImages/PowerBiWorkshop.png",
    "./CertificationImages/Python.png",];
for (let i = 0; i < document.querySelectorAll(".certi").length; i++) {
    document.querySelectorAll(".certi")[i].addEventListener("click", (e) => {
        e.stopPropagation();
        document.querySelector(".fullscreen").style.display = "block";
        document.querySelector("html").style.overflow = "hidden";
        document.querySelector(".fill").setAttribute("src", pathFile[i]);
    })
}

document.querySelector(".closeFullScreen").addEventListener("click", () => {
    document.querySelector(".fullscreen").style.display = "none";
    document.querySelector("html").style.overflow = "";
});
document.addEventListener("click", (e) => {
    if(!(document.querySelector(".fill").contains(e.target))){
        document.querySelector(".fullscreen").style.display = "none";
        document.querySelector("html").style.overflow = "";
    }
        
});
/*icon hover in contact section*/
document.querySelector(".LocationAddress").addEventListener("mouseover", () =>{
    document.querySelectorAll(".conIco")[0].style.fill = "rgb(244, 250, 253)";
    document.querySelector(".locationIcon").style.backgroundColor = "#149ddd";
});
document.querySelector(".LocationAddress").addEventListener("mouseout", () =>{
    document.querySelectorAll(".conIco")[0].style.fill = "#149ddd";
    document.querySelector(".locationIcon").style.backgroundColor = "rgb(244, 250, 253)";
});

document.querySelector(".callMe").addEventListener("mouseover", () =>{
    document.querySelectorAll(".conIco")[1].style.fill = "rgb(244, 250, 253)";
    document.querySelector(".callMeIcon").style.backgroundColor = "#149ddd";
});
document.querySelector(".callMe").addEventListener("mouseout", () =>{
    document.querySelectorAll(".conIco")[1].style.fill = "#149ddd";
    document.querySelector(".callMeIcon").style.backgroundColor = "rgb(244, 250, 253)";
});

document.querySelector(".emailMe").addEventListener("mouseover", () =>{
    document.querySelectorAll(".conIco")[2].style.fill = "rgb(244, 250, 253)";
    document.querySelector(".emailMeIcon").style.backgroundColor = "#149ddd";
});
document.querySelector(".emailMe").addEventListener("mouseout", () =>{
    document.querySelectorAll(".conIco")[2].style.fill = "#149ddd";
    document.querySelector(".emailMeIcon").style.backgroundColor = "rgb(244, 250, 253)";
});