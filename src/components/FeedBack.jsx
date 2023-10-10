import React from 'react';

function FeedBack() {
  // Define styles as an object
  const styles = {
    padding: '20px', // Add padding
    fontFamily: 'Arial, sans-serif', // Change font family
    width: '100%', // Set width to full width
    textAlign: 'center', // Center content horizontally
  };

  // Define the CSS for the .Section class
  const sectionStyles = {
    width: '80%',
    display: 'block',
    margin: 'auto', // Center the form horizontally
    paddingTop: '100px',
    paddingLeft: '400px', // Add left padding
    textAlign: 'left', // Align content within the form to the left
  };

  // Define styles for the submit button
  const submitButtonStyles = {
    backgroundColor: '#007bff', // Blue background color
    color: 'white', // White text color
    padding: '10px 120px', // Padding for the button
    margin: 'auto',
    border: 'none', // Remove the button border
    cursor: 'pointer', // Add pointer cursor on hover
    paddingLeft: '220px', // Add left padding
    textAlign: 'left', 
  };

  return (
    <div style={styles}>
      <h2>Feedback Form</h2>
      <form className='Section' style={sectionStyles}> {/* Apply the .Section class styles here */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            required
          />
        </div>
        <br></br>
        <div>
          <label>Email :</label>
          <input
            type="email"
            required
          />
        </div>
        <br></br>
        <div>
          <label>Message:</label>
          <textarea
            required
          ></textarea>
        </div>
        <br></br>
        <div>
          {/* Apply submit button styles */}
          <button type="submit" style={submitButtonStyles}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FeedBack;
