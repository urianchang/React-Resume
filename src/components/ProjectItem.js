import React from 'react';

const ProjectItem = props => {

    const getHighlights = props.projectItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>);
    });

    return (
        <div className="projectItem">
          <ul className="profileLinks list-inline">
              <li><h3>{props.projectItemData.name}</h3></li>
              <li><span className='label label-primary'>{props.projectItemData.language}</span></li>
              <li><a className="fa fa-github fa-2x" href={props.projectItemData.source}></a></li>
              <li><a href={props.projectItemData.url}>{props.projectItemData.url}</a></li>
          </ul>
          <p>{props.projectItemData.description}</p>
          <ul>{getHighlights}</ul>
        </div>
    )
};

export default ProjectItem;
