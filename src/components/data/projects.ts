import React from '../../assets/react.svg'
import Tailwind from '../../assets/Tailwind CSS.svg'
import TS from '../../assets/typescript.svg'
import Vue from '../../assets/vue.svg'
import Spotify from '../../assets/spotify.svg'
import Spotify1 from '../../assets/spotify1.png'
import Spotify2 from '../../assets/spotify2.png'
import Spotify3 from '../../assets/spotify3.png'
import Library1 from '../../assets/library1.png'
import Library2 from '../../assets/DropDown.gif'
import Library3 from '../../assets/library3.png'
import Dashboard1 from '../../assets/Dashbard1.png'
import Dashboard2 from '../../assets/Dashboard2.png'
import Dashboard3 from '../../assets/Dashboard3.png'
import Dashboard4 from '../../assets/Dashboard4.png'
import Campus1 from '../../assets/campus1.png'
import Campus2 from '../../assets/campus2.png'
import Campus3 from '../../assets/campus3.png'
import Campus4 from '../../assets/campus4.png'
import ReactAdmin from '../../assets/react-admin.png'
import Next from '../../assets/Next.js.svg'


const spotifyRole = [
    "Designed the simple UI using figma.",
    "Built the frontend using React and Tailwind CSS",
    "Integrated dynamic state management for handling data.",
    "Enhanced user experience using animations and transitions using CSS.",
    "Integrated the Spotify API with authorization for user accounts.",
]

const dashboardRole = [
    "Designed a simple and straight forward user interface.",
    "Integrated data visualization using chartjs and vue-chart.",
    "Built the frontend using VueJS and Tailwind CSS.",
    "Integrated timetable viewing with v-calendar.",
]

const libraryRole = [
    "Designed each component to be simple to implement and efficient.",
    "Built the components using React and Tailwind CSS.",
    "Implemented modern animations using CSS.",
    "Built the compnents as easily reusable to fetch any component I need for a future project.",
    "Occasionally update the library to enhance my skills and chalenge myself with new UI elements.",
]

const campusRole = [
    "Designed and built the responsive landing page and LMS interface using React, Next.js, and Tailwind CSS.",
    "Implemented dynamic cart functionality and integrated authentication flows.",
    "Enhanced user experience with interactive components and ensured cross-browser compatibility.",
    "Collaborated with cross-functional teams to ensure smooth integration of the LMS features.",
    "Optimized performance to handle scaling user traffic.",
    "Created a full-featured admin dashboard for instructors to manage courses, programs, and workshops.",
    "Built the frontend using React and Tailwind CSS with a focus on simplicity and usability.",
    "Integrated forms and validations for adding and updating course data.",
    "Worked closely with backend APIs to handle secure data operations and content management.",
    "Ensured the dashboard was responsive and user-friendly across devices."
]

export const projects = [
    {
        id:"1",
        name:"Spotify Vinyl",
        year:"2025",
        tech:[{"React":React}, {"Tailwind CSS":Tailwind}, {"Typescript":TS}, {"Spotify API":Spotify}],
        desc:"Vinyl Music Player is a creative and interactive music player designed to bring the nostalgic charm of vinyl records to your digital experience. With smooth animations, authentic sound effects, and a user-friendly interface, this project reimagines the classic vinyl experience for the modern era.",
        role:spotifyRole,
        link:"https://vinyl-player.netlify.app/",
        github:"https://github.com/ShehabEMohsen/VinylMusicPlayer",
        images:[Spotify1,Spotify2,Spotify3],
        smallDesc:"A music player that brings Spotify songs to life with a spinning vinyl animation.",
    },
    {
        id:"2",
        name:"Admin Dashboard",
        year:"2025",
        tech:[{"VueJS":Vue}, {"Tailwind CSS":Tailwind}, {"Typescript":TS}],
        desc:"A well-designed admin dashboard that simplifies management tasks with an intuitive interface and real-time data visualization. It provides seamless navigation, easy access to key features, and efficient tools for handling users, transactions, and system settings. Built with performance and usability in mind, it ensures a smooth and hassle-free experience.",
        role:dashboardRole,
        link:"",
        github:"https://github.com/ShehabEMohsen/Admin-Dashboard",
        images:[Dashboard1,Dashboard2,Dashboard3,Dashboard4],
        smallDesc:"An admin dashboard that users can use to manage their employees and customers.",
    },
    {
        id:"3",
        name:"Components Library",
        year:"2024",
        tech:[{"React":React}, {"Tailwind CSS":Tailwind}, {"Typescript":TS}],
        desc:"A collection of reusable, high-performance frontend components built with modern web technologies. Designed for efficiency and scalability, these components focus on clean UI, smooth animations, and seamless interactions. The library is constantly updated with new components, making it a valuable resource for developers looking to streamline their workflow.",
        role:libraryRole,
        link:"",
        github:"https://github.com/ShehabEMohsen/100days100project",
        images:[Library3,Library1, Library2],
        smallDesc:"A collection of reusable and modern frontend components, that are updated regularly.",
    },
    {
        id:"4",
        name:"Campus51 Platform",
        year:"2023-2025",
        tech:[{"NextJS":Next}, {"Tailwind CSS":Tailwind}, {"Typescript":TS}, {"React Admin":ReactAdmin}],
        desc: "A comprehensive learning platform featuring a public storefront, integrated LMS, and a dedicated admin dashboard for instructors. Built with React, Next.js, and Tailwind CSS, the platform delivers a seamless user experience with dynamic cart functionality, secure authentication, and responsive design. The admin dashboard empowers instructors to effortlessly create and manage courses, programs, and workshops, streamlining the content management process. Designed for scalability and maintainability, the platform ensures smooth interactions and consistent performance across devices.",
        role:campusRole,
        link:"https://www.campus51.com/",
        // github:"https://github.com/ShehabEMohsen/VinylMusicPlayer",
        images:[Campus1,Campus2,Campus3,Campus4],
        smallDesc:"An educational web application to sell courses and workshops with an LMS side to it.",
    },
]