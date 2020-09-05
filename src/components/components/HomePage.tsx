import React, { useEffect, useContext } from 'react';
import useHttp from './share/UseHttp';
import SiteHeader from './siteHelper/SiteHeader';
import SiteExperience from './siteHelper/SiteExperience';
import SiteNav from './siteHelper/SiteNav';
import SiteEducation from './siteHelper/SiteEducation';
import SiteSkill from './siteHelper/SiteSkills';
import SiteMap from './siteHelper/SiteMap';

import UseFirebase from './share/UseFirebase';
import SiteContact from './siteHelper/SiteContact';

const HomePage: React.FC<any> = () => {
    const [aboutIsLoading, aboutData, aboutError] = UseFirebase('about');
    const [experienceIsLoading, experienceData, experienceError] = UseFirebase('experience');
    const [educationIsLoading, educationData, educationError] = UseFirebase('education');
    const [skillIsLoading, skillData, skillError] = UseFirebase('skill');
    const [contantLoading, contactData, contactError] = UseFirebase('contact');

    useEffect(() => {
        console.log(aboutData);
        console.log(experienceData);
        console.log(educationData);
        console.log(skillData);
        console.log(contactData);
    }, []);

    return (
        <div className="input">
            <SiteNav />
            {!aboutIsLoading ? <SiteHeader
                data={aboutData}
            /> : <h1>Loading .....</h1>}
            {!experienceIsLoading ? <SiteExperience
                data={experienceData}
            /> : <h1>Loading .....</h1>}
            {!educationIsLoading ? <SiteEducation
                data={educationData}
            /> : <h1>Loading .....</h1>}
            {!skillIsLoading ? <SiteSkill
                data={skillData}
            /> : <h1>Loading .....</h1>}
            <SiteMap />
            <SiteContact />
        </div>
    );
};

export default HomePage;


