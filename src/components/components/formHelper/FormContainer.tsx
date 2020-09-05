import * as React from 'react';
import HeaderForm from './HeaderForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillForm from './SkillForm';
import SiteForm from './SiteForm';
import UseFirebase from './../share/UseFirebase';

const FormContainer: React.FC<any> = () => {
    const [aboutIsLoading, aboutData, aboutError] = UseFirebase('about');
    const [experienceIsLoading, experienceData, experienceError] = UseFirebase('experience');
    const [educationIsLoading, educationData, educationError] = UseFirebase('education');
    const [skillIsLoading, skillData, skillError] = UseFirebase('skill');
    const [SiteIsLoading, siteData, siteError] = UseFirebase('site');

    React.useEffect(() => {
        console.log(aboutData);
        console.log(experienceData);
        console.log(educationData);
        console.log(skillData);
        console.log(siteData);
    }, []);

    return (
        <div className="input">
            {!aboutIsLoading ? <HeaderForm data={aboutData} /> : <h1>Loading.....</h1>}
            {!experienceIsLoading ? <ExperienceForm data={experienceData} /> : <h1>Loading.....</h1>}
            {!educationIsLoading ? <EducationForm data={educationData} /> : <h1>Loading.....</h1>}
            {!skillIsLoading ? <SkillForm data={skillData} /> : <h1>Loading.....</h1>}
            {<SiteForm data={siteData} />}
        </div>
    );
};

export default FormContainer;

