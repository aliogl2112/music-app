class MusicPlayer{
    constructor(musicList){
        this.musicList = musicList;
        this.musicIndex=0; 
    }
    getMusic(){
        return this.musicList[this.musicIndex];
    }
    nextMusic(){
        if(this.musicIndex+1 < this.musicList.length)
            this.musicIndex++;
        else
            this.musicIndex = 0;
    }
    previousMusic(){
        if(this.musicIndex !=0)
            this.musicIndex--;
        else
            this.musicIndex = this.musicList.length-1;
    }
}