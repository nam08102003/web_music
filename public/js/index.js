
import { musics } from "./musicStore.js";



const musicLists = document.querySelector('.music-lists-items');
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


function renderMusic (musicCurrent, isPlaying) {
    const html1s = musics.map((musicItem, index) => {
        return `
            <div class="music-list-item ${(musicCurrent === index && isPlaying == true) ? "playing" : ""}" data-index="${index}">
                <div class="music-list-item-image">
                    <img src="${musicItem.image}" alt="">
                    <div class="music-list-item-overlay"></div>
                    <div class="music-list-item-icon-play">
                        <i class="far fa-play-circle"></i>
                    </div>
                </div>
                <div class="music-list-item-info">
                    <div class="name-singer-music">
                        <a href="javascript:;">${musicItem.name}</a>
                        <a href="javascript:;">${musicItem.singer}</a>
                    </div>
                    <div class="wave">
                        <span class="wave1">A</span>
                        <span class="wave2">B</span>
                        <span class="wave3">C</span>
                    </div>
                </div>
                <span class="time">${musicItem.time}</span>
            </div>
        `
    });

    musicLists.innerHTML = html1s.join('');

};


function musicCurrentLoading (musicCurrent) {
    musicImagePlaying.src = musics[musicCurrent].image;
    musicNamePlaying.innerHTML = `
        <h3>${musics[musicCurrent].name}</h3>
        <p>${musics[musicCurrent].singer}</p>
    `;
    musicNameControllerPlaying.innerHTML = `
        <img src="${musics[musicCurrent].image}" alt="">
        <div class="music-controller-playing">
            <h3>${musics[musicCurrent].name}</h3>
            <a href="">${musics[musicCurrent].singer}</a>
        </div>
        <i class="fas fa-ellipsis-v"></i>
    `;
    audio.src = musics[musicCurrent].path;
}



function handleEvents (musicCurrent) {

    // Bài hát play/pause
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

    // Khi click vào bài hát
    musicLists.onclick = function (e) {
        const songNode = e.target.closest(".music-list-item");
            
        if(songNode) {
            musicCurrent = Number(songNode.dataset.index);
            musicCurrentLoading(musicCurrent);
            audio.play();
            isPlaying = true;
            playPause(isPlaying);
            renderMusic(musicCurrent, isPlaying);
        }
    }



    // Hàm click play/pause bài hát
    function clickPlay () {
        playSidebar.onclick = function () {
            isPlaying = !isPlaying;
            renderMusic(musicCurrent, isPlaying);
            playPause(isPlaying)
        }
        playController.onclick = function () {
            isPlaying = !isPlaying;
            renderMusic(musicCurrent, isPlaying);
            playPause(isPlaying);
        }
    }

    // Hàm format time
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
        let minutesTotal = Math.floor(totalTime / 60);
        let secondsTotal = Math.floor(totalTime - minutesTotal*60);
        if (secondsTotal < 10) {
            secondsTotal = "0" + secondsTotal;
        }
        if(minutesTotal < 10) {
            minutesTotal = "0" + minutesTotal;
        }
        return minutesTotal + ":" + secondsTotal
    }



    // Khi next/back bài hát ở sidebar
    nextSidebar.onclick = function () {
        musicCurrent++;
        if(musicCurrent >= musics.length) {
            musicCurrent = 0;
        }
        isPlaying = true;
        musicCurrentLoading(musicCurrent);
        renderMusic(musicCurrent, isPlaying);
        playPause(isPlaying);
    }

    backSidebar.onclick = function () {
        musicCurrent--;
        if(musicCurrent < 0 ) {
            musicCurrent = musics.length - 1;
        }
        isPlaying = true;
        musicCurrentLoading(musicCurrent);
        renderMusic(musicCurrent, isPlaying);
        playPause(isPlaying);
    }

    // Khi next/back bài hát ở controller
    nextController.onclick = function () {
        musicCurrent++;
        if(musicCurrent >= musics.length) {
            musicCurrent = 0;
        }
        isPlaying = true;
        musicCurrentLoading(musicCurrent);
        renderMusic(musicCurrent, isPlaying);
        playPause(isPlaying);
    }

    backController.onclick = function () {
        musicCurrent--;
        if(musicCurrent < 0 ) {
            musicCurrent = musics.length - 1;
        }
        isPlaying = true;
        musicCurrentLoading(musicCurrent);
        renderMusic(musicCurrent, isPlaying);
        playPause(isPlaying);
    }

    // Khi bài hát kết thúc
    audio.onended = function () {
        nextController.click();
    }

    // Tiến độ bài hát thay đổi
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

    // Khi tua bài hát
    progress.onchange = function (e) {
        const timeChange = (audio.duration / 100) * e.target.value;
        audio.currentTime = timeChange;
    }

    // Thay đổi volume bài hát
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

renderMusic();
musicCurrentLoading(musicCurrent);
handleEvents(musicCurrent);


