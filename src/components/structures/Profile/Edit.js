import React from 'react';
import '../../styles/Edit.css';


const PersonalInfoForm = () => {
    return (
      <div className="container">
        <h2>Personal</h2>
        <p>Use a permanent address where you can receive mail.</p>
        <div className="form">
          <div className="profile-pic">
            <label htmlFor="upload"><span>Click to upload or drag and drop</span></label>
            <input type="file" id="upload" accept="image/png, image/jpeg" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" disabled="true" />
          </div>
          <div className="form-group">
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" placeholder="Address" />
          </div>
          <div className="form-group">
            <label htmlFor="college">College</label>
            <input type="text" id="college" name="college" placeholder="Institute" />
          </div>         
           <button type="submit">Save</button>
        </div>

  <hr />

        <h2 className='section-2'>Personal</h2>
        <p>Your social links.</p>
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">Github</label>
            <input type="text" id="name" name="name" placeholder="Github URL" />
          </div>
          <div className="form-group">
            <label htmlFor="name">LinkedIn</label>
                <input type="text" id="name" name="name" placeholder="LinkedIn URL" />
            <div className="form-group">
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="location">Twitter</label>
            <input type="text" id="location" name="location" placeholder="Twitter URL" />
          </div>
          <div className="form-group">
            <label htmlFor="college">Website</label>
            <input type="text" id="college" name="college" placeholder="Website URL" />
          </div>
          <button type="submit">Save</button>
        </div>

      </div>
    );
  };
  
  export default PersonalInfoForm;