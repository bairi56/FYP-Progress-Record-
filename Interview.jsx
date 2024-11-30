import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook

const Interview = () => {
  const navigate = useNavigate(); // Initialize the navigation function
  const handleIconClick = () => {
    navigate('/JobPosting'); // Replace '/next-page' with your target route
  };
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQn-Y-tmGd9D4jUPkCn1r-9HT209m8amljNVM8CjxPjWhzBzDTp" alt="Recruiter Logo" style={styles.logoImage} />
          {/* <span style={styles.logoText}>Recruiter Interview</span> */}
        </div>
        <div style={styles.welcomeText}>Welcome, Recruiter</div>
      </nav>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Post a New Job */}
        <div style={styles.grid}>
          <h2 style={styles.gridTitle}>Post a New Job</h2>
          <div style={styles.icon} onClick={handleIconClick}>
            <span style={styles.iconSymbol}>+</span>
          </div>
          <p style={styles.gridText}>Click here to post a new job and find the perfect candidates!</p>
        </div>

        {/* Posted Jobs */}
        <div style={styles.grid}>
          <h2 style={styles.gridTitle}>Posted Jobs</h2>
          <div style={styles.icon}>
            <span style={styles.iconSymbol}>📦</span>
          </div>
          <p style={styles.gridText}>View all the jobs you have posted so far.</p>
        </div>

        {/* Recent Posted Jobs Section */}
        {/* Recent Posted Jobs Section */}
<div style={styles.tableContainer}>
  <div style={styles.sectionHeader}>
    <h2 style={styles.sectionTitle}>Recent Posted Jobs</h2>
    <div style={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search jobs..."
        style={styles.searchInput}
      />
      <span style={styles.searchIcon}>
        <img
          src="data:image/png;base64,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"
          alt="Custom Search Icon"
          style={styles.customSearchIcon}
        />
      </span>
    </div>
  </div>

          {/* Table */}
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.columnHeader}>Job Title</th>
                <th style={styles.columnHeader}>Location</th>
                <th style={styles.columnHeader}>Posted Date</th>
                <th style={styles.columnHeader}>Job Type</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.jobTitle}>Software Engineer</td>
                <td style={styles.tableCell}>New York, USA</td>
                <td style={styles.tableCell}>2025-11-01</td>
                <td style={styles.jobType}>Full-Time</td>

              </tr>
              {/* Additional rows can go here */}
              <td style={styles.jobTitle}>AI Engineer</td>
                <td style={styles.tableCell}>Londan, UK</td>
                <td style={styles.tableCell}>2024-11-01</td>
                <td style={styles.jobType}>Full-Time</td>

                <tr>
                <td style={styles.jobTitle}>Front End developer</td>
                <td style={styles.tableCell}>Islamabad, PAK</td>
                <td style={styles.tableCell}>2020-01-01</td>
                <td style={styles.jobType}>Part-Time</td>

                </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '0',
    margin: '0',
    backgroundColor: '#f4f4f4',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f0f0f0', // White background
    color: '#444', // Light black text
    borderBottom: '1px solid #ddd',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor:'#444',
    width: '40px', // Adjust the width
    height: '40px', // Adjust the height
  },
  logoImage: {
    width: '40px', // Adjust the width
    height: '40px', // Adjust the height
    objectFit: 'contain', // Ensure the image retains its aspect ratio
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  welcomeText: {
    fontSize: '18px',
  },
  mainContent: {
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  grid: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  gridTitle: {
    fontSize: '22px',
    marginBottom: '10px',
    color:'black',
  },
  icon: {
    fontSize: '40px',
    margin: '10px 0',
    color: '#007bff',
  },
  iconSymbol: {
    fontSize: '50px',
  },
  gridText: {
    color: '#555',
    fontSize: '16px',
  },
  tableContainer: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
//   sectionTitle: {
//     fontSize: '22px',
//     marginBottom: '20px',
//   },
  searchBarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // Aligns the search box to the right
    marginLeft: 'auto', // Pushes the search box as far to the right as possible
    paddingRight: '20px', // Optional: Adds spacing from the edge of the container
    width: '50%', // Adjust width as needed to limit space it occupies
  },
  searchInput: {
    width: '35%',
    padding: '13px 40px 10px 15px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    marginRight: '10px', // Add spacing between input and icon

  },

  customSearchIcon: {
    position: 'absolute',
    top: '10%',
    right: '-17px',
    transform: 'translateY(-50%)',
    fontSize: '18px',
    pointerEvents: 'none',
    width: '30px', // Adjust the width
    height: '30px', // Adjust the height
    objectFit: 'contain', // Ensure the image retains its aspect ratio
  },
  searchIcon: {
    position: 'absolute',
    top: '110.1%',
    right: '120px',
    transform: 'translateY(-50%)',
    fontSize: '18px',
    color: '#f0f0f0',
    pointerEvents: 'none',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '16px',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0', // Light gray background
    color: '#333', // Dark text
    fontWeight: 'bold',
  },
  columnHeader: {
    padding: '10px',
  },
  jobTitleHeader: {
    padding: '30px',
    color: '#007bff', // Blue color for header
  },
  jobTypeHeader: {
    padding: '20px',
    color: '#28a745', // Green color for header
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left',
    color: 'black', // Added black text color

  },
  jobTitle: {
    color: '#007bff', // Blue color for job title
    fontWeight: 'bold',
  },
  jobType: {
    backgroundColor: '#7b828c', // Light green background for job type
    fontWeight: 'bold',
    // borderRadius: '3px',
    padding: '2px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px', // Add some spacing below the header row
  },
  sectionTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 'bold',
  },
};

export default Interview;
