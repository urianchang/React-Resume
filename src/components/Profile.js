import React from 'react';

const Profile = props => {
    const profileObj = props.profileData;
    return  <div>
                  <div className="profileImg"><img className="img-circle center-block" src="{profileObj.picture}" alt="" width="200" /></div>
                  <h1 className="text-center">{profileObj.name}</h1>
                  <h2 className="text-center">{profileObj.label}</h2>
                  <div className="divider"></div>
                  <ul className="list-unstyled contact-links text-center">
                    <li><i className="fa fa-lg fa-location-arrow"></i> {profileObj.location.city}, {profileObj.location.state}, {profileObj.location.country}</li>
                    <li><i className="fa fa-lg fa-envelope"></i> <a href={"mailto:" + profileObj.email}>{profileObj.email}</a></li>
                  </ul>
                  <div className="divider"></div>
                  <ul className="profileLinks list-inline text-center">
                    <li><a className="fa fa-linkedin-square fa-2x" href={'https://www.linkedin.com/in/'+profileObj.profiles[0].username}></a></li>
                    <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileObj.profiles[1].username}></a></li>
                  </ul>
                  <div className="divider"></div>
                  <p>I built this app with <a href="https://facebook.github.io/react/">React</a> components. Inspired by <a href="http://jonbloomer.com.au/">Jonathan Bloomer's resume</a>. The full source code can be found in <a href="https://github.com/freaksauce/React-Resume-ES6">my Github repo</a>.</p>
            </div>
};

export default Profile;
