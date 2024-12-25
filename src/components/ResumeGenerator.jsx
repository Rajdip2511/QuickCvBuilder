import { useState } from 'react';
import { Education } from './Education.jsx';
import { WorkExperience } from './WorkExperience.jsx';
import { GeneralInformation } from './GeneralInformation.jsx';
import { Projects } from './Projects.jsx';
import Header from './Header.jsx'; // Import Header component
import Footer from './Footer.jsx'; // Import Footer component

const ResumeGenerator = () => {
  /* --- Helper functions -------------------------------------------------------------------------- */
  const compileFormData = (event, fields) => {
    const data = {};
    fields.forEach((field) => {
      data[field] = event.target[field].value;
    });
    return data;
  };

  const filterById = (data, id) => {
    return data.filter((entry) => entry.id !== id);
  };

  /* --- General Information ---------------------------------------------------------------------- */
  const [resumeData, setResumeData] = useState({});
  const GENERAL_INFORMATION_FIELDS = [
    'firstname',
    'lastname',
    'phone',
    'email',
  ];

  const submitGeneralInformation = (event) => {
    event.preventDefault();
    const entry = compileFormData(event, GENERAL_INFORMATION_FIELDS);
    setResumeData({ ...resumeData, ...entry });
    console.log(resumeData);
  };

  /* --- Work Experience -------------------------------------------------------------------------- */
  const [workExperience, setWorkExperience] = useState([]);
  const WORK_EXPERIENCE_FIELDS = [
    'company',
    'position',
    'startDate',
    'endDate',
    'responsibilities',
  ];

  const addWorkExperience = (event) => {
    event.preventDefault();
    const workExperienceEntry = compileFormData(event, WORK_EXPERIENCE_FIELDS);
    workExperienceEntry['id'] = crypto.randomUUID();
    setWorkExperience([...workExperience, workExperienceEntry]);
    console.log(workExperienceEntry);
  };

  const submitWorkExperience = (event) => {
    addWorkExperience(event);
    event.target.reset();
  };

  const updateWorkExperience = (event, id) => {
    event.preventDefault();
    const editedEntry = compileFormData(event, WORK_EXPERIENCE_FIELDS);
    editedEntry['id'] = id;
    setWorkExperience([editedEntry, ...filterById(workExperience, id)]);
    console.log(editedEntry);
  };

  const deleteWorkExperience = (event, id) => {
    event.preventDefault();
    setWorkExperience(filterById(workExperience, id));
  };

  /* --- Education -------------------------------------------------------------------------------- */
  const [education, setEducation] = useState([]);
  const EDUCATION_FIELDS = ['school', 'program', 'startDate', 'endDate'];

  const addEducation = (event) => {
    event.preventDefault();
    const educationEntry = compileFormData(event, EDUCATION_FIELDS);
    educationEntry['id'] = crypto.randomUUID();
    setEducation([...education, educationEntry]);
    console.log(educationEntry);
  };

  const submitEducation = (event) => {
    addEducation(event);
    event.target.reset();
  };

  const updateEducation = (event, id) => {
    event.preventDefault();
    const updatedEducation = compileFormData(event, EDUCATION_FIELDS);
    updatedEducation['id'] = id;
    setEducation([updatedEducation, ...filterById(education, id)]);
    console.log(updatedEducation);
  };

  const deleteEducation = (event, id) => {
    event.preventDefault();
    setEducation(filterById(education, id));
    console.log(education);
  };

  /* --- Projects ---------------------------------------------------------------------------------- */
  const [projects, setProjects] = useState([]);
  const PROJECT_FIELDS = ['name', 'description'];

  const addProject = (event) => {
    event.preventDefault();
    const projectEntry = compileFormData(event, PROJECT_FIELDS);
    projectEntry['id'] = crypto.randomUUID();
    setProjects([...projects, projectEntry]);
    console.log(projectEntry);
  };

  const submitProject = (event) => {
    addProject(event);
    event.target.reset();
  };

  const updateProject = (event, id) => {
    event.preventDefault();
    const updatedProject = compileFormData(event, PROJECT_FIELDS);
    updatedProject['id'] = id;
    setProjects([updatedProject, ...filterById(projects, id)]);
    console.log(updatedProject);
  };

  const deleteProject = (event, id) => {
    event.preventDefault();
    setProjects(filterById(projects, id));
    console.log(projects);
  };

  const loadPresetResumeData = () => {
    setResumeData({
      firstname: 'Shisa',
      lastname: '',
      phone: '888-888-8888',
      email: 'supa_arubaito@chiikawa.co',
    });
    setWorkExperience([
      {
        id: 'POGGERS',
        company: 'Rou ramen',
        startDate: '2024-12-27',
        endDate: '',
        responsibilities: 'Making ramen and taking orders from customers',
      },
    ]);
    setEducation([
      {
        id: 'zippy-zoppy',
        school: 'Supa Arubaito School',
        startDate: '2024-23-25',
        endDate: '2024-12-26',
      },
    ]);
    setProjects([
      {
        id: 'project1',
        name: 'Project 1',
        description: 'Description of project 1.',
      },
    ]);
  };

  const resetResumeData = () => {
    setResumeData({});
    setWorkExperience([]);
    setEducation([]);
    setProjects([]);
  };

  return (
    <div className="resume-generator">
      <Header /> {/* Add Header Component */}
      <section>
        <h1>Resume Generator</h1>
        <GeneralInformation
          data={resumeData}
          onSubmit={submitGeneralInformation}
        />
        <div className="divider"></div> {/* Custom Divider */}
        <WorkExperience
          data={workExperience}
          onSubmit={submitWorkExperience}
          onUpdate={updateWorkExperience}
          onDelete={deleteWorkExperience}
        />
        <div className="divider"></div> {/* Custom Divider */}
        <Education
          data={education}
          onSubmit={submitEducation}
          onUpdate={updateEducation}
          onDelete={deleteEducation}
        />
        <div className="divider"></div> {/* Custom Divider */}
        <Projects
          data={projects}
          onSubmit={submitProject}
          onUpdate={updateProject}
          onDelete={deleteProject}
        />
        <div className="button-holder">
          <button onClick={loadPresetResumeData}>Load Preset Resume</button>
          <button onClick={resetResumeData}>Reset Resume</button>
        </div>
      </section>
      <section>
        <div className="resume">
          <div className="general-info">
            <h2>
              {resumeData.firstname} {resumeData.lastname}
            </h2>
            <h3>
              {resumeData.phone ? `Phone: ${resumeData.phone}` : ''}
              <br />
              {resumeData.email ? `Email: ${resumeData.email}` : ''}
            </h3>
          </div>
          {workExperience.map((data) => {
            return (
              <div key={data.id} className="work-experience">
                <h2>Work Experience</h2>
                <hr />
                <h3>{data.position}</h3>
                <h4>{data.company}</h4>
                <h5>
                  {data.endDate
                    ? `${data.startDate} - ${data.endDate}`
                    : `${data.startDate} - Present`}
                </h5>
                <p>{data.responsibilities}</p>
              </div>
            );
          })}
          {education.map((data) => {
            return (
              <div key={data.id} className="education">
                <h2>Education</h2>
                <hr />
                <h3>{data.program}</h3>
                <h4>{data.school}</h4>
                <h5>
                  {data.endDate
                    ? `${data.startDate} - ${data.endDate}`
                    : `${data.startDate} - Present`}
                </h5>
              </div>
            );
          })}
          {projects.map((data) => {
            return (
              <div key={data.id} className="projects">
                <h2>Projects</h2>
                <hr />
                <h3>{data.name}</h3>
                <p>{data.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <Footer /> {/* Add Footer Component */}
    </div>
  );
};

export default ResumeGenerator;
