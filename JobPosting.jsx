import React, { useState } from 'react';

const JobPostingPage = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState('');

  const handleSkillSelect = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleExperienceSelect = (level) => {
    setExperienceLevel(level);
  };

  return (
    <div style={styles.container}>
      <button style={styles.goBackButton}>
        <span style={styles.arrow}>←</span> Go Back
      </button>

      <div style={styles.formContainer}>
        <h2>Post a Job</h2>

        {/* Job Title */}
        <div style={styles.inputRow}>
          <label style={styles.label}>Job Title*</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g Senior Software Engineer"
            style={styles.inputField}
          />
        </div>

        {/* Job Description */}
        <div style={styles.inputRow}>
          <label style={styles.label}>Job Description*</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Enter detailed description..."
            style={styles.textArea}
          />
        </div>

        {/* Required Skills */}
        <div style={styles.inputRow}>
          <label style={styles.label}>Required Skills*</label>
          <div style={styles.skillsContainer}>
            {['JavaScript', 'Python', 'Java', 'React', 'Node.js', 'Machine Learning', 'SQL', 'Git', 'C++'].map(skill => (
              <button
                key={skill}
                onClick={() => handleSkillSelect(skill)}
                style={{
                  ...styles.skillButton,
                  backgroundColor: selectedSkills.includes(skill) ? '#add8e6' : '#e4e8f2',
                }}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div style={styles.inputRow}>
          <label style={styles.label}>Experience Required*</label>
          <div style={styles.experienceContainer}>
            <select
              value={experienceLevel}
              onChange={(e) => handleExperienceSelect(e.target.value)}
              style={styles.selectDropdown}
            >
              <option value="">Select experience level</option>
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>

        {/* Submit Buttons */}
        <div style={styles.buttonContainer}>
          <button style={styles.cancelButton}>Cancel</button>
          <button style={styles.postButton}>Post Job</button>
        </div>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  goBackButton: {
    border: 'none',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
  },
  arrow: {
    marginRight: '8px',
    fontSize: '20px',
  },
  formContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    color:'black'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: '10px',
    color:'black'
  },
  inputRow: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  inputField: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  textArea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    minHeight: '150px',
    boxSizing: 'border-box',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  skillButton: {
    padding: '12px 20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s',
    width: 'calc(50% - 10px)',
  },
  experienceContainer: {
    width: '100%',
    textAlign: 'left',
    marginLeft: '10px',
  },
  selectDropdown: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  cancelButton: {
    padding: '12px 25px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  postButton: {
    padding: '12px 25px',
    backgroundColor: '#add8e6',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default JobPostingPage;
