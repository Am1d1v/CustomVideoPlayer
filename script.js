

const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');


// Play and Pause video
function toggleVideoStatus(){
    return true;
}

// Update Play/Pause icon
function updatePlayIcon(){
    return true;
}

// Update Progress
function updateProgress(){
    return true;
}

// Update progress and timestamp
function setVideoProgress(){
    return true;
}

// Stop video
function stopVideo(){
    return true;
}


// Event Lsiteners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)