import React from 'react';
import About from './components/About';
import Profile from './components/Profile';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const skillsData = props.jsonObj.skills;
  const educationData = props.jsonObj.education;
  const projectsData = props.jsonObj.projects;
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
                  <Projects projectsData={projectsData} />
                  <Work workData={workData} />
                  <Education educationData={educationData} />
                </div>
              </main>
            </div>
          </div>
    )
};

export default App;
