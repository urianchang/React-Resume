import React from 'react';

const Projects = props => {
    const getProjects = props.projectsData.map(function(item, index) {
  		return (
          <div key={index}>
            <h3 className="text-italicize">{item.name}</h3>
            <span className='label label-primary'>{item.language}</span>
  			<p>{item.description}</p>
            <p></p>
  		  </div>
        )
  	});

  	return (
  	  <section className="projects">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-thumb-tack"></i> Projects</h2>
        {getProjects}
      </section>
  	)
};

export default Projects
