let play_pause=document.getElementById("play_pause")
let audioElement=new Audio("./songs/song1.mp3")
let song_bar=document.getElementById("song_progress_bar")
let ablum_name=document.getElementById("ablum_name")
let playButtons=document.querySelectorAll(".play i")
let currentPlayingIndex=-1
let songs=[
    "./songs/song1.mp3",
    "./songs/song2.mp3",
    "./songs/song3.mp3",
    "./songs/song4.mp3",
    "./songs/song5.mp3",
    "./songs/song6.mp3",
    "./songs/song8.mp3",
    "./songs/song7.mp3",
    "./songs/song10.mp3",
    "./songs/song9.mp3",
    "./songs/song1.mp3",
    "./songs/song1.mp3"  
]
let songNames=[
    "Ela Ela Naalo",
    "Nenu Nuvvantu",
    "Nee Yadalo",
    "Waiting For u",
    "Telisiney Na",
    "Emaindhi",
    "Nuvvasthanante",
    "Bujji Thali",
    "Chalore Chalore",
    "Nuvvunte Naa Jathagaa",
    "Ela Ela Naalo",
    "Ela Ela Naalo",

]

play_pause.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play()
        play_pause.classList.remove("fa-play")
        play_pause.classList.add("fa-pause")
    }else{
        audioElement.pause()
        play_pause.classList.remove("fa-pause")
        play_pause.classList.add("fa-play")
    }

})

audioElement.addEventListener("timeupdate",()=>{
    // console.log(audioElement.currentTime)
    // console.log(audioElement.duration)
    let progress=(audioElement.currentTime/audioElement.duration)*100
    console.log(progress)
    song_bar.value=progress
})

song_bar.addEventListener("change",()=>{
    audioElement.currentTime=(song_bar.value*audioElement.duration)/100
})
// console.log(playButtons)
playButtons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
       if(currentPlayingIndex!==index){
         if(currentPlayingIndex!==-1){
             playButtons[currentPlayingIndex].classList.replace("fa-pause","fa-play")
         }
         audioElement.src=songs[index]
         audioElement.play()
         button.classList.replace("fa-play","fa-pause")
         play_pause.classList.replace("fa-play","fa-pause")
         currentPlayingIndex=index
         album_name.innerText=songNames[index]
       }else{
         if(audioElement.paused){
             audioElement.play()
         button.classList.replace("fa-play","fa-pause")
         play_pause.classList.replace("fa-play","fa-pause")
         }else{
             audioElement.pause()
         button.classList.replace("fa-pause","fa-play")
         play_pause.classList.replace("fa-pause","fa-play")
         }
       }
       
    })
 })

//  handlings prev and next Buttons
let count=-1;
let forward =document.querySelector(".fa-forward");
let backward=document.querySelector(".fa-backward");

forward.addEventListener("click",()=>{
    if(count<11){
        count++
        audioElement.src=songs[count]
        audioElement.play()
        ablum_name.innerText=songNames[count]
        play_pause.classList.replace("fa-play","fa-pause")
    }
})


backward.addEventListener("click",()=>{
    if(count>0){
        count--
        audioElement.src=songs[count]
        audioElement.play()
        ablum_name.innerText=songNames[count]
        play_pause.classList.replace("fa-play","fa-pause")
    }
})