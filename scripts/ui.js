class UI{
    constructor(){
        this.container = document.querySelector("#container");
        this.image = document.querySelector("#music-image");
        this.audio = document.querySelector("#music-audio");
        this.title = document.querySelector(".music-details .title");
        this.singer = document.querySelector(".music-details .singer");
        this.prev = document.querySelector(".controls #prev");
        this.play = document.querySelector(".controls #play");
        this.next = document.querySelector(".controls #next");
        this.progressBar = document.querySelector("#progress-bar");
        this.currentTime = document.querySelector("#current-time");
        this.duration = document.querySelector("#duration");
        this.musicList = document.querySelector(".music-list-group");
        this.volume = document.querySelector("#volume");
        this.volumeIcon = document.querySelector("#volume-icon");
    }
}