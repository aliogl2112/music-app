const player = new MusicPlayer(musicList);
const ui = new UI();

window.addEventListener("load",()=>{
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList)
    isPlayNow()
})
function displayMusic(music){
    ui.title.innerText = music.getName();
    ui.singer.innerText = music.singer;
    ui.image.src=music.img;
    ui.audio.src=music.mp3;
}

ui.play.addEventListener("click",()=>{
    const isMusicPlay = ui.audio.classList.contains("playing") //is audio have playing class?
    isMusicPlay ? pauseMusic() : playMusic();
    ui.audio.classList.toggle("playing");
})

function playMusic(){
    ui.audio.play();
    ui.play.classList.replace("fa-play","fa-pause");
    isPlayNow()
}

function pauseMusic(){
    ui.audio.pause();
    ui.play.classList.replace("fa-pause","fa-play");
}

ui.next.addEventListener("click",nextMusic)
function nextMusic(){
    player.nextMusic();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
    addPlayingClass()
    isPlayNow()
}

ui.prev.addEventListener("click",prevMusic)
function prevMusic(){
    player.previousMusic();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
    addPlayingClass()
    isPlayNow()
}

function addPlayingClass(){
    return ui.audio.classList.add("playing");
}

ui.audio.addEventListener("loadedmetadata",()=>{ //Actions to be taken when the underlying metadata for the item of media is loaded or becomes available
    let duration = ui.audio.duration;
    ui.duration.textContent = calculateTime(duration);
    ui.progressBar.max = Math.floor(duration);
})

const calculateTime = (second) => {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second%60);
    const updatedSec = sec< 10 ?`0${sec}`:`${sec}`;
    const sonuc = `${min}:${updatedSec}`;
    return sonuc;
}

ui.audio.addEventListener("timeupdate",()=>{ //transactions per second
    let currentTime = ui.audio.currentTime
    ui.progressBar.value= Math.floor(currentTime);
    ui.currentTime.textContent = calculateTime(ui.progressBar.value);
})
ui.audio.addEventListener("ended",nextMusic)
ui.progressBar.addEventListener("input",()=>{
    ui.audio.currentTime = ui.progressBar.value
})

ui.volume.addEventListener("input",(e)=>{
    ui.audio.volume = e.target.value / 100;
    if(e.target.value < 69 && e.target.value > 0){
        ui.volumeIcon.classList=("fa-solid fa-volume-low")
        ui.audio.muted = false;
    }
    else if(e.target.value == 0){
        ui.volumeIcon.classList=("fa-solid fa-volume-xmark")
        ui.audio.muted = true;
    }
    else{
        ui.volumeIcon.classList=("fa-solid fa-volume-high")
        ui.audio.muted = false;
    }
})

ui.volumeIcon.addEventListener("click",()=>{
    if(ui.volume.value==0){
        ui.volumeIcon.classList=("fa-solid fa-volume-high");
        ui.volume.value=100;
        ui.audio.muted = false;
    }
    else{
        ui.volumeIcon.classList=("fa-solid fa-volume-xmark")
        ui.volume.value=0;
        ui.audio.muted = true;
    }

})

function displayMusicList(musicList){
    for (let i=0;i<musicList.length;i++ ){
        let liTag=`
        <li li-index='${i}' onClick="selectedMusic(this),isPlayNow()" class="music-list-item">
            <span class="music-list-title">
            <img src="${musicList[i].img}" alt="" style="width:3rem;height:3rem;">
            <span class="singer">${musicList[i].singer}</span> - <span class="title"><b>${musicList[i].getName()}</b></span>
            </span>
            <span  id="music-${i}" class="music-list-time"></span>
            <audio class="music-${i}" src="${musicList[i].mp3}"></audio>
            
        </li>
        `;

        ui.musicList.insertAdjacentHTML("beforeend",liTag);

        let liAudioDuration = ui.musicList.querySelector(`#music-${i}`);
        let liAudioTag = ui.musicList.querySelector(`.music-${i}`);

        liAudioTag.addEventListener("loadeddata",()=>{
            liAudioDuration.innerText = calculateTime(liAudioTag.duration);
        })
    }
}
function selectedMusic(li){
    player.musicIndex = li.getAttribute("li-index");
    displayMusic(player.getMusic());
    playMusic();
    addPlayingClass()
}

function isPlayNow(){
    for(let li of ui.musicList.querySelectorAll("li")){
        if(li.classList.contains("play-now"))
            li.classList.remove("play-now")
        if(li.getAttribute("li-index")==player.musicIndex){
            li.classList.add("play-now")
        }

    }
}




