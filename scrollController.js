const floatingLogo = document.querySelector(".floating-logo");
const mainContainer = document.querySelector(".main__container");


floatingLogo.addEventListener("mouseup", () => {
    mainContainer.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});