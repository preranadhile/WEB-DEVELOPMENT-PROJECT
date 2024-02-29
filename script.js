
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Warriyo - Mortals(feat.Laura Brehm)[NCS Release]",filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Cielo - Huma-Huma",filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k",filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart ",filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning",filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Rabba-Salam-e-Ishq",filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: " Sakhiya - Salam-e-Ishq",filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: " Bhula dena- Salam-e-Ishq",filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: " Tumhari Kasam- Salam-e-Ishq",filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName: " Na Jaana - Salam-e-Ishq",filePath: "songs/10.mp3", coverPath:"covers/10.jpg"},
]

songsItems.forEach((element,i)=>{

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progess = parseInt((audioElement.currentTime / audioElement.duration)*100);
    myProgressBar.value = progess;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
       element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click' ,(e)=>{
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })
});

document.getElementById('next').addEventListener('click',()=>
{
    if(songIndex > 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');    
})

document.getElementById('previous').addEventListener('click',()=>
{
    if(songIndex <=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');    
})