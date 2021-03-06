
import { topSongs } from "./topSongs.js";


const topSongsLists = document.querySelector('.top-songs-items');
const musicPlaying = document.querySelector('.sidebar .music-playing');
const musicControllerPlaying = document.querySelector('.music-controller .music-controller-main');
const musicImagePlaying = document.querySelector('.music-playing .music-image-playing img');
const musicNamePlaying = document.querySelector('.music-playing .music-name-playing');
const musicNameControllerPlaying = document.querySelector('.music-controller .music-controller-left');
const playSidebar = document.querySelector('.music-options .music-option-child:nth-child(2)');
const playController = document.querySelector('.music-controller .music-controller-icon:nth-child(3)');
const backSidebar = document.querySelector('.sidebar .music-playing .music-option-child:nth-child(1)');
const nextSidebar = document.querySelector('.sidebar .music-playing .music-option-child:nth-child(3)');
const nextController = document.querySelector('.music-controller .music-controller-center .music-controller-icon:nth-child(4)');
const backController = document.querySelector('.music-controller .music-controller-center .music-controller-icon:nth-child(2)');
const musicTimeCurrent = document.querySelector('.music-controller .music-controller-right .music-controller-playing-time .time-current');
const musicTimeTotal = document.querySelector('.music-controller .music-controller-right .music-controller-playing-time .time-total');
const volumeControllers = document.querySelectorAll('.music-controller-playing-volume i');
const controllerRight = document.querySelector('.music-controller .music-controller-right');
const valueVolume = document.querySelector('#volume-playing');
const audio = document.querySelector('#audio');
const progress = document.querySelector('#range-bar');


let musicCurrent = 0;
let isPlaying = false;
let isVolume = true;



function renderTopSongs (musicCurrent, isPlaying) {
    const htmls = topSongs.map((songItem, index) => {
        return `
            <div class="top-song-item ${(musicCurrent === index && isPlaying == true) ? "playing" : ""}" data-index="${index}">
                <div class="top-song-info">
                    <div class="top-song-image">
                        <img src="${songItem.image}" alt="">
                        <div class="top-song-image-overlay"></div>
                        <div class="top-song-icon-play">
                            <a href="javascript:;">
                                <i class="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                    <div class="top-song-introduce">
                        <div class="song-name">
                            <a href="javascript:;">${songItem.name}</a>
                        </div>
                        <div class="song-singer">
                            <span>${songItem.singer}</span>
                        </div>
                    </div>
                </div>
                <div class="top-song-interactive">
                    <div class="top-song-time">
                        <span>${songItem.time}</span>
                    </div>
                    <div class="top-song-viewed">
                        <span>8M+ View</span>
                    </div>
                </div>
                <div class="top-song-option">
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
        `
    })

    topSongsLists.innerHTML = htmls.join('');

}


function musicCurrentLoading (musicCurrent) {
    musicImagePlaying.src = topSongs[musicCurrent].image;
    musicNamePlaying.innerHTML = `
        <h3>${topSongs[musicCurrent].name}</h3>
        <p>${topSongs[musicCurrent].singer}</p>
    `;
    musicNameControllerPlaying.innerHTML = `
        <img src="${topSongs[musicCurrent].image}" alt="">
        <div class="music-controller-playing">
            <h3>${topSongs[musicCurrent].name}</h3>
            <a href="">${topSongs[musicCurrent].singer}</a>
        </div>
        <i class="fas fa-ellipsis-v"></i>
    `;
    audio.src = topSongs[musicCurrent].path;
}


function handleEvents (musicCurrent) {

    // B??i h??t play/pause
    function playPause (isPlaying) {
        if(isPlaying) {
            musicPlaying.classList.add("active");
            musicControllerPlaying.classList.add("active");
            audio.play();
        } else {
            musicPlaying.classList.remove("active");
            musicControllerPlaying.classList.remove("active");
            audio.pause();
        }
    }

    // Khi click v??o b??i h??t
    topSongsLists.onclick = function (e) {
        const songNode = e.target.closest(".top-song-item");
            
        if(songNode) {
            musicCurrent = Number(songNode.dataset.index);
            musicCurrentLoading(musicCurrent);
            audio.play();
            isPlaying = true;
            playPause(isPlaying);
            renderTopSongs(musicCurrent, isPlaying);
        }
    }



    // H??m click play/pause b??i h??t
    function clickPlay () {
        playSidebar.onclick = function () {
            isPlaying = !isPlaying;
            renderTopSongs(musicCurrent, isPlaying);
            playPause(isPlaying)
        }
        playController.onclick = function () {
            isPlaying = !isPlaying;
            renderTopSongs(musicCurrent, isPlaying);
            playPause(isPlaying);
        }
    }

    // H??m format time
    function formatTime(currentTime) {
        let minutesCurrent = Math.floor(currentTime / 60);
        let secondsCurrent = Math.floor(currentTime - minutesCurrent*60);

        if(minutesCurrent < 10) {
            minutesCurrent = "0" + minutesCurrent;
        }
        if (secondsCurrent < 10) {
            secondsCurrent = "0" + secondsCurrent;
        }

        return minutesCurrent + ":" + secondsCurrent
    }


    function formatTimeTotal(totalTime) {
        let minutesTotal;
        let secondsTotal;
        if(totalTime === NaN) {
            minutesTotal = 0;
            secondsTotal = 0;
        } else {
            minutesTotal = Math.floor(totalTime / 60);
            secondsTotal = Math.floor(totalTime - minutesTotal*60);
        }
        if (secondsTotal < 10) {
            secondsTotal = "0" + secondsTotal;
        }
        if(minutesTotal < 10) {
            minutesTotal = "0" + minutesTotal;
        }
        return minutesTotal + ":" + secondsTotal
    }



    // Khi next/back b??i h??t ??? sidebar
    nextSidebar.onclick = function () {
        musicCurrent++;
        if(musicCurrent >= topSongs.length) {
            musicCurrent = 0;
        }
        isPlaying = true;
        musicCurrentLoading(musicCurrent);
        renderTopSongs(musicCurrent, isPlaying);
        playPause(isPlaying);
    }

    backSidebar.onclick = function () {
        musicCurrent--;
        if(musicCurrent < 0 ) {
            musicCurrent = topSongs.length - 1;
        }
        isPlaying = true;
        musicCurrentLoading(musicCurrent);
        renderTopSongs(musicCurrent, isPlaying);
        playPause(isPlaying);
    }

    // Khi next/back b??i h??t ??? controller
    nextController.onclick = function () {
        musicCurrent++;
        if(musicCurrent >= topSongs.length) {
            musicCurrent = 0;
        }
        isPlaying = true;
        musicCurrentLoading(musicCurrent);
        renderTopSongs(musicCurrent, isPlaying);
        playPause(isPlaying);
    }

    backController.onclick = function () {
        musicCurrent--;
        if(musicCurrent < 0 ) {
            musicCurrent = topSongs.length - 1;
        }
        isPlaying = true;
        musicCurrentLoading(musicCurrent);
        renderTopSongs(musicCurrent, isPlaying);
        playPause(isPlaying);
    }

    // Khi b??i h??t k???t th??c
    audio.onended = function () {
        nextController.click();
    }

    // Ti???n ????? b??i h??t thay ?????i
    audio.ontimeupdate = function () {
        if(audio.duration) {
            const percentTime = (audio.currentTime / audio.duration) * 100;
            progress.value = percentTime;
        }
        const timeCurrent = formatTime(audio.currentTime);
        musicTimeCurrent.textContent = timeCurrent;
        const timeMusicTotal = formatTimeTotal(audio.duration);
        musicTimeTotal.textContent = timeMusicTotal;
    }

    // Khi tua b??i h??t
    progress.onchange = function (e) {
        const timeChange = (audio.duration / 100) * e.target.value;
        audio.currentTime = timeChange;
    }

    // Thay ?????i volume b??i h??t
    volumeControllers.forEach((volumeController) => {
        volumeController.onclick = function () {
            if(isVolume) {
                controllerRight.classList.add("volume");
                valueVolume.value = 0;
                audio.volume = 0;
                isVolume = !isVolume;
            } else {
                controllerRight.classList.remove("volume");
                valueVolume.value = 100;
                audio.volume = 1;
                isVolume = !isVolume;
            }
        }

        valueVolume.onchange = function () {
            // audio.volume = (valueVolume.value) / 100;
            if(valueVolume.value == 0) {
                controllerRight.classList.add("volume");
                audio.volume = 0;
                isVolume = !isVolume;
            } else {
                audio.volume = (valueVolume.value) / 100;
                controllerRight.classList.remove("volume");
            }
        }

    })


    clickPlay();
    playPause(isPlaying);
}




renderTopSongs()
musicCurrentLoading(musicCurrent);
handleEvents(musicCurrent);
