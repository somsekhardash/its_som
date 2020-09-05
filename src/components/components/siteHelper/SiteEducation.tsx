import * as React from 'react';

const SiteEducation: React.FC<any> = ({ data }) => {
    if(Object.entries(data).length === 0) return null;
    const education = data;
    const educations = Object.keys(education);
    return (
        <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            {educations.map((node, index) => 
                <div key={index} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{education[node].instituteName}</h3>
                        <div className="subheading mb-3">{education[node].courseName}</div>
                        <div>{education[node].courseDetails}</div>
                        <p>GPA: {education[node].CGPA}</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">{education[node].startDate} - {education[node].endDate}</span></div>
                </div>
            )}
        </div>
    </section>
    );
};

export default SiteEducation;




                   
                