import React from 'react';
import SkillSet from './SkillSection';

const Skills = props => {
    const getSkills = () => {
        const skillSets = [];
        props.skillsData.forEach((val, index) => {
            skillSets.push(<SkillSet key={index} skillSetData={val}/>);
        });
        return skillSets;
    }
  	return (
  	  <section className="skills">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Technical Skills</h2>
        <table className="table">{getSkills()}</table>
      </section>
    );
};

export default Skills;
