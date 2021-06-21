const myPlayer = document.querySelector(".hero__popupVideo");
var isVideoCached = false;

function playVideo() {
  myPlayer.play();
}

function pauseVideo() {
  myPlayer.pause();
}

function loadVideo() {
  if (isVideoCached == true) {

  } else {
    myPlayer.load();
    myPlayer.pause();
    isVideoCached = true;
  }
}

function reloadVideo() {
  myPlayer.load();
  myPlayer.pause();
  isVideoCached = true;
}

function mutedToggl() {
  myPlayer.muted ^= 1;
}

function videoEnd() {
  buttonStop.classList.add("active");
}