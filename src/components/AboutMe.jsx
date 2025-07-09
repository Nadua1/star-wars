import React, {useEffect, useState} from 'react';
import {base_url} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState('');
    useEffect(() => {
        const name = "Luke Skywalker";
        fetch(`${base_url}v1/peoples/${name}`)
            .then(res => res.json())
            .then(data => setAboutMe(data.aboutMe));
        return () => {console.log("done")}
    }, [])
    if(aboutMe){
        return (<p>{aboutMe}</p>)
    }else {
        return (<p>"error"</p>)
    }
   
};

export default AboutMe;