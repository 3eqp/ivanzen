const buttonPlay = document.querySelector(".showreel-play");
const videoCursorPopup = document.querySelector(".videoCursorPopup");
const buttonStop = document.querySelector(".showreel-stop");
const screenOverlay = document.querySelector(".screenOverlay");

var isVideoOpened = false;

function videoPopup() {
    if (isVideoOpened == true) {
        closeVideoPopup();
    } else {
        openVideoPopup();
    }
}

function openVideoPopup() {
    buttonPlay.classList.add("active");
    videoCursorPopup.classList.add("active");
    screenOverlay.classList.add("active");
    isVideoOpened = true;
    playVideo();
}

function closeVideoPopup() {
    videoCursorPopup.classList.remove("active");
    buttonPlay.classList.remove("active");
    buttonStop.classList.remove("active");
    screenOverlay.classList.remove("active");
    isVideoOpened = false;
    reloadVideo();
}

window.addEventListener("mousedown", () => {
    if (isVideoOpened == true) {
        buttonStop.classList.add("active");
    } else {

    }
});

window.addEventListener("mouseup", () => {
    if (isVideoOpened == true) {
        videoPopup();
    } else {

    }
});

window.addEventListener("mousemove", cursor);

function cursor(e) {
    videoCursorPopup.style.top = e.pageY + "px";
    videoCursorPopup.style.left = e.pageX + "px";
}