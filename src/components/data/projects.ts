import React from '../../assets/react.svg'
import Tailwind from '../../assets/Tailwind CSS.svg'
import TS from '../../assets/typescript.svg'
import Spotify from '../../assets/spotify.svg'
import Spotify1 from '../../assets/spotify1.png'
import Spotify2 from '../../assets/spotify2.png'
import Spotify3 from '../../assets/spotify3.png'

export const projects = [
    {
        id:"1",
        name:"Spotify Vinyl",
        year:"2025",
        tech:[{"React":React}, {"Tailwind CSS":Tailwind}, {"Typescript":TS}, {"Spotify API":Spotify}],
        desc:"Vinyl Music Player is a creative and interactive music player designed to bring the nostalgic charm of vinyl records to your digital experience. With smooth animations, authentic sound effects, and a user-friendly interface, this project reimagines the classic vinyl experience for the modern era.",
        role:["Lorem Ipsum", "lorem", "Lorem Ipsum", "lorem", "Lorem Ipsum", "lorem",],
        link:"https://vinyl-player.netlify.app/",
        github:"https://github.com/ShehabEMohsen/VinylMusicPlayer",
        images:[Spotify1,Spotify2,Spotify3],
    },
]