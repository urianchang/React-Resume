import React from 'react';
import moment from 'moment';

const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>;
    }

    const getHighlights = props.workItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>);
    });

    return (
        <div className="workItem">
          <h3>{props.workItemData.position}</h3>
          <h4>{props.workItemData.company}  |  <span className='companyLocation'>{props.workItemData.location}</span></h4>
          <p className="workDates">{getWorkDates()}</p>
          <p>{props.workItemData.summary}</p>
          <ul>{getHighlights}</ul>
        </div>
    )
};

export default WorkItem;
