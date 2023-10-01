import React from 'react';
import './HomePage.css';
import Navbar from './Navbar';
import myImage from './assets/images/Radhiyah.jpeg'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to My Homepage</h1>
        <p>This is a simple React homepage with a connected top navigation bar.</p>
      </header>
      <Navbar />
      <main className="columns">
        <div className="column" id="about">
          <h2>Introduction</h2>
          <div className='acol'>
        <div className="column2" >
        <h2>Wan Halimatul Radhiyah Binti Wan Hussin</h2>
        <div className='acol'>
        <div className='image'>
        <img src={myImage} alt="Description of the image" />
        </div>
        <div className='column3'>
            <span>Highly motivated Software Engineering fresh graduate with good
              problem-solving skills and a growing coding proficiency. Enthusiastic
              team player, committed to continuous learning and delivering
              innovative solutions through effective collaboration.
              </span>
        </div>
              </div>
        </div>
        <div className="column2" >
        <h2>Education</h2>
                  <p>- Bachelor of Software Engineering (Educational Software) with
                    Honours, Universiti Pendidikan Sultan Idris, Tanjung Malim</p>
                    <b>CGPA 3.78</b>
                  <p>- Foundation of Physical Sciences, Pusat Asasi Sains Universiti
                    Malaya, Petaling Jaya
                    </p>
                  <p>- Sijil Pelajaran Malaysia , Sekolah Tun Fatimah, Johor Bahru
                  </p>
                  <b>4A+, 3A, 1A-, 1B+</b>
        </div>
        </div>
        </div>
        <div className="column" id="experience">
          <h2>Experience</h2>
          <div className='acol'>
        <div className="column2" >
            <h2>Internship</h2>
        <b>Software Engineering at Juara Partners Sdn Bhd, Petaling Jaya</b>
              <p>- Developed Python code to automate the daily conversion of  CTOS
                HTML files into PDF format.</p>
              <p>- Developed Python code to convert CTOS PDF files into XLSX format
                for enhanced data processing. </p>
              <p>- Engaged in the ongoing process of conducting data engineering
                  for CTOS using Python.</p>
              <p>- Developed Java-based code for extracting relevant information
                from HTML files into XLSX format..</p>
        </div>
        <div className="column2" >
        <h2>Education</h2>
        <h4>Final Year Project</h4>
              <b>Development of Augmented Reality Mobile App for traditional
                clothes </b>
              <p>- Gold Award in The 7th International Exhibition of Research, Idea &
                Innovation on Creativity and Human (7th ie-RIICH, 2023)
              </p>
              <p>- Utilised the Blender software to develop the 3D Model for the
                augmented reality
                </p>
              <p>- Learned and used Unity Editor to develop augmented reality for
                AR-BUSANA Mobile App</p>
        </div>
        </div>
        </div>
        <div className="column" id="projects">
          <h2>Projects</h2>
          {/* Content for "Projects" */}
        </div>
      </main>
      <footer>
        <p>&copy; 2023 My Homepage</p>
      </footer>
    </div>
  );
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyaSaub1j-jTfEH1IeHH8g-9n6ZcToyjM",
    authDomain: "myweb-edc1e.firebaseapp.com",
    databaseURL: "https://myweb-edc1e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myweb-edc1e",
    storageBucket: "myweb-edc1e.appspot.com",
    messagingSenderId: "776185152597",
    appId: "1:776185152597:web:2ae313a50c4d5b6affc0dc",
    measurementId: "G-GQJM81PF0D"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


export default HomePage;
