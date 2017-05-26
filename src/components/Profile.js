import React from 'react';

const Profile = props => {
    const profileObj = props.profileData;
    return  <div>
                  <div className="profileImg"><img className="img-circle center-block" src={profileObj.picture} alt="" width="200" /></div>
                  <h1 className="text-center">{profileObj.name}</h1>
                  <h2 className="text-center">{profileObj.label}</h2>
                  <div className="divider"></div>
                  <ul className="list-unstyled contact-links text-center">
                    <li><i className="fa fa-lg fa-location-arrow"></i> {profileObj.location.city}, {profileObj.location.state}, {profileObj.location.country}</li>
                    <li><i className="fa fa-lg fa-envelope"></i> <a href={"mailto:" + profileObj.email}>{profileObj.email}</a></li>
                    <li><i className="fa fa-lg fa-globe"></i> <a href={profileObj.website}>urian.fun</a></li>
                  </ul>
                  <div className="divider"></div>
                  <ul className="profileLinks list-inline text-center">
                    <li><a className="fa fa-smile-o fa-2x" href={profileObj.profiles[0].url}> </a></li>
                    <li><a className="fa fa-linkedin-square fa-2x" href={profileObj.profiles[1].url}> </a></li>
                    <li><a className="fa fa-github fa-2x" href={profileObj.profiles[2].url}> </a></li>
                  </ul>
                  <div className="divider"></div>
                  <p>Built with <a href="https://facebook.github.io/react/">React</a> components and a <a href="https://jsonresume.org/schema/">JSON Resume Schema</a>. Inspired by <a href="http://jonbloomer.com.au/">Jonathan Bloomer's resume</a>. Full source code in <a href="https://github.com/urianchang/React-Resume">my Github repo</a>.</p>
            </div>
};

export default Profile;
