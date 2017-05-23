import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = props => {
    const getProjectDetails = () => {
        const projectItems = [];
        props.projectsData.forEach((val, index) => {
            projectItems.push(<ProjectItem key={index} projectItemData={val}/>);
        });
        return projectItems;
    }

  	return (
  	  <section className="projects">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-thumb-tack"></i> Projects</h2>
        {getProjectDetails()}
      </section>
  	)
};

export default Projects;
