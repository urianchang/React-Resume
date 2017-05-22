import React from 'react';
// import logo from './logo.svg';
import About from './components/About';
import Profile from './components/Profile';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
// import './App.css';

const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;
  // console.log(profileData)
  return (
          <div className="container">
            <div className="row">
              <aside className="col-md-4">
                <div className="inner">
                  <Profile profileData={profileData} />
                </div>
              </aside>
              <main className="col-md-8">
                <div className="inner">
                  <About aboutData={aboutData} />
                  <Skills skillsData={skillsData} />
                  <Work workData={workData} />
                  <Education educationData={educationData} />
                </div>
              </main>
            </div>
          </div>
    )
};

export default App;
