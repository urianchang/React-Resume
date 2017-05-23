import React from 'react';

const SkillSet = props => {
    const getSkill = props.skillSetData.keywords.map(function(item, index) {
        return (<li key={index}><span className='label label-primary'>{item}</span></li>);
    });
    return (
        <tr>
            <th>{props.skillSetData.name}</th>
            <td>
                <ul className="skills-list list-inline">{getSkill}</ul>
            </td>
        </tr>
    )
};

export default SkillSet;
