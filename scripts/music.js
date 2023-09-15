class Music{
    constructor(title,singer,img,mp3){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.mp3=mp3;
    }
    getName(){
        return this.title;
    }
}
const musicList=[
    new Music("Affet","Müslüm Gürses","../assets/img/muslum-gurses/affet.jpg","../assets/mp3/muslum-gurses/affet.mp3"),
    new Music("Hangimiz Sevmedik","Müslüm Gürses","../assets/img/muslum-gurses/hangimiz-sevmedik.jpg","../assets/mp3/muslum-gurses/hangimiz-sevmedik.mp3"),
    new Music("Yıllar Utansın","Müslüm Gürses","../assets/img/muslum-gurses/yillar-utansin.jpg","../assets/mp3/muslum-gurses/yillar-utansin.mp3"),
    new Music("Bir Zamanlar Deli Gönlüm","Sezen Aksu","../assets/img/sezen-aksu/bir-zamanlar-deli-gonlum.jpg","../assets/mp3/sezen-aksu/bir-zamanlar-deli-gonlum.mp3"),
    new Music("Haydi Gel Benimle Ol","Sezen Aksu","../assets/img/sezen-aksu/haydi-gel-benimle-ol.jpg","../assets/mp3/sezen-aksu/haydi-gel-benimle-ol.mp3"),
    new Music("Zalim","Sezen Aksu","../assets/img/sezen-aksu/zalim.jpg","../assets/mp3/sezen-aksu/zalim.mp3"),
]