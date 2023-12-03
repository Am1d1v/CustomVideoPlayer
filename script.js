

const video = document.querySelector('.videoScreen');
const play = document.querySelector('#play');
const stopp = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');


// Play and Pause video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

// Update Play/Pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// Update Progress
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;
}

// Update progress and timestamp
function setVideoProgress(){
    video.currentTime = (progress.value * video.duration) / 100;

    // Get minutes
    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10){
        minutes = '0' + String(minutes);
    }

    // Get seconds
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10){
        seconds = '0' + String(seconds);
    }

    timestamp.textContent = `${minutes}:${seconds}`;
}

// Stop video
function stopVideo(){
    video.currentTime = 0;
    video.paused();
}


// Event Lsiteners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stopp.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)