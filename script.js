//Initilizing Variables First
let SongIndex = 0;
let SongElement = new Audio("songs/1.mp3");
let MasterPlay = document.getElementById('P-b');
let My_Progress_Bar = document.getElementById('my_progress_bar');
let music_bar_gif = document.getElementById('gif-bar');
let MasterSongName = document.getElementById('M-Sn');
let Song_Items = Array.from(document.getElementsByClassName("songItem")) ;
// let Song_list_but = document.getElementsByClassName('SongList-but');
//for Banner Image
let Banner_Image = document.getElementById('sn-banner');

document.getElementById('sn-banner').src = "Spotify Banner Logo.png";
document.getElementById('M-Sn').innerText = "Clone By Abhishek Uday Salokhe";
//-- Songs Array

let songs = [

    {songName:"Alone By Alan Walker", filePath:"songs/1.mp3",coverPath:"Cover Images/Alone  Song image.jpeg",BannerPath:"BannerImg/Alone Banner Image.jpg"},
    {songName:"Faded By Alan Walker", filePath:"songs/2.mp3",coverPath:"Cover Images/Faded Alan W img.jpeg",BannerPath:"BannerImg/Faded Banner img.jpg"},
    {songName:"Kesariya By Arjit Singh", filePath:"songs/3.mp3",coverPath:"Cover Images/Kesariya.jpeg",BannerPath:"BannerImg/Kesariya Banner Img.jpeg"},
    {songName:"Darkside By Alan Walker", filePath:"songs/4.mp3",coverPath:"Cover Images/Darkside song.jpeg",BannerPath:"BannerImg/Dark Side Banner Img.jpg"},
    {songName:"Man Meri Jaan By King", filePath:"songs/5.mp3",coverPath:"Cover Images/Man Meri jaan.jpeg",BannerPath:"BannerImg/Man Meri Jaaan Banner Img.jpeg"},
    {songName:"On My Way By Alan Walker", filePath:"songs/6.mp3",coverPath:"Cover Images/On My Way song image.jpeg",BannerPath:"BannerImg/On My Way Banner Img.jpg"},
    {songName:"Pathan Meri Jaan By Arjit Singh", filePath:"songs/7.mp3",coverPath:"Cover Images/Pathan meri jaan.jpeg",BannerPath:"BannerImg/Pathan Meri Jaan Banner IMmg.jpg"},
    {songName:"End Of Time By Alan Walker", filePath:"songs/8.mp3",coverPath:"Cover Images/End of time song img.jpeg",BannerPath:"BannerImg/End Of Time Banner Img.jpg"},
    {songName:"Hawayein By Arjit Singh", filePath:"songs/9.mp3",coverPath:"Cover Images/Hawaye albm img.jpeg",BannerPath:"BannerImg/Hawaye Banner Img.jpeg"},
    {songName:"Bijli Bijli By Hardy Sindhu", filePath:"songs/10.mp3",coverPath:"Cover Images/Biji biji albm img.jpeg",BannerPath:"BannerImg/Bijli Bijli Banner Img.jpeg"},
];

Song_Items.forEach((elements,i)=>{
    console.log(elements,i);
    elements.getElementsByTagName("img")[0].src = songs[i].coverPath;
    elements.getElementsByClassName("Song-Name")[0].innerText = songs[i].songName;
   
})

//Adding Event Listeners
MasterPlay.addEventListener('click',()=>{
    if(SongElement.paused || SongElement.currentTime<=0){
        SongElement.play();
        MasterPlay.classList.remove('fa-play');
        MasterPlay.classList.add('fa-pause');
        music_bar_gif.style.opacity = 1;
    }
    else{
        SongElement.pause();
        MasterPlay.classList.remove('fa-pause');
        MasterPlay.classList.add('fa-play');
        music_bar_gif.style.opacity = 0;
    }
})

SongElement.addEventListener('timeupdate',()=>{

   // console.log('timeupdate');
    //Progress Val of Bar = formula =(Current Time / Duration) X 100 
    progress = parseInt((SongElement.currentTime/SongElement.duration)*100);
    //console.log(progress);
    My_Progress_Bar.value = progress;
})


//Chnging Value OF Bar Using Cursor: -------------------------------------------------------------------------

My_Progress_Bar.addEventListener('change',()=>{
    SongElement.currentTime = My_Progress_Bar.value * SongElement.duration/100;
})


//Make ALL Buttons Play In List While Other Buttons Are Pause  : :

const MakeALL_Play = ()=>{
    Array.from(document.getElementsByClassName('SongList-but')).forEach((element)=>{
        element.classList.add('fa-pause');
        element.classList.add('fa-play');
    })
}


Array.from(document.getElementsByClassName('SongList-but')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        MakeALL_Play();
        
        SongIndex = parseInt(e.target.id);
        MasterSongName.innerText = songs[SongIndex].songName;
        Banner_Image.src = songs[SongIndex].BannerPath;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        SongElement.src = `songs/${SongIndex+1}.mp3`;
        SongElement.currentTime = 0;
        SongElement.play();
        MasterPlay.classList.remove('fa-play');
        MasterPlay.classList.add('fa-pause');
         music_bar_gif.style.opacity = 1;
    })
})

//Change and Play Next Song
document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex>=9){
        SongIndex = 0;
        document.getElementById(9).classList.add('fa-play');
        document.getElementById(0).classList.add('fa-pause');
    }
    else{
        SongIndex = SongIndex + 1;
        document.getElementById(SongIndex-1).classList.add('fa-play');
     document.getElementById(SongIndex).classList.remove('fa-play');
     document.getElementById(SongIndex).classList.add('fa-pause');
    }
    SongElement.src = `songs/${SongIndex+1}.mp3`;
    MasterSongName.innerText = songs[SongIndex].songName;
    SongElement.currentTime = 0;
    SongElement.play();
    MasterPlay.classList.remove('fa-play');
    MasterPlay.classList.add('fa-pause');
     music_bar_gif.style.opacity = 1;
})


//Change and Play Privious Song
document.getElementById('back').addEventListener('click',()=>{
    if(SongIndex<=0){
        SongIndex = 0;
        document.getElementById(SongIndex).classList.remove('fa-play');
        document.getElementById(SongIndex).classList.add('fa-pause');
    }
    else{
        // SongIndex = SongIndex - 1;
        document.getElementById(SongIndex+1).classList.add('fa-play');
        document.getElementById(SongIndex).classList.remove('fa-play');
        document.getElementById(SongIndex).classList.add('fa-pause');
    }
    SongElement.src = `songs/${SongIndex+1}.mp3`;
    MasterSongName.innerText = songs[SongIndex].songName;
    SongElement.currentTime = 0;
    SongElement.play();
    MasterPlay.classList.remove('fa-play');
    MasterPlay.classList.add('fa-pause');
     music_bar_gif.style.opacity = 1;  
})

