import * as React from 'react';

const SiteExperience: React.FC<any> = ({ data }) => {
    if(Object.entries(data).length === 0) return null;
    const experience = data;
    const experiences = Object.keys(experience);
    return (
        <section className="resume-section" id="experience">
        <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            {experiences.map((node, index) => 
                <div key={index} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{experience[node].designation}</h3>
                        <div className="subheading mb-3">{experience[node].companyName}</div>
                        <p>{experience[node].description}</p>
                    </div>
                    <div className="flex-shrink-0">
                        <span className="text-primary">
                            {experience[node].startDate} - {experience[node].endDate}
                        </span>
                    </div>
                </div>
            )}
        </div>
    </section>
    );
};

export default SiteExperience;


