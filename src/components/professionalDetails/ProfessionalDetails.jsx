import axios from 'axios';
import React, { useState } from 'react';

const ProfessionalDetails = (props) => {
  const [professionalDetails, setProfessionalDetails] = useState({
    designation: '',
    hospital: '',
    city: '',
    state: '',
    yearsOfExperience: {
      years: '',
      months: '',
    },
    qualification: '',
  });
  const handleUpdate = () => {
    axios
      .put('http://localhost:5000/api/user/' + props.id, professionalDetails)
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div>
      <div
        className="p-5 d-flex justify-content-center flex-column align-items-center"
        style={{
          width: '100%',
        }}
      >
        <h1>Professional Details</h1>
        <div
          className="d-flex flex-column gap-3 mt-4"
          style={{ width: '100%' }}
        >
          <input
            type="text"
            value={professionalDetails.designation}
            onChange={(e) =>
              setProfessionalDetails({
                ...professionalDetails,
                designation: e.target.value,
              })
            }
            placeholder="Designation"
            className="rounded border-0 p-2 border-bottom"
          />
          <input
            type="text"
            value={professionalDetails.hospital}
            onChange={(e) =>
              setProfessionalDetails({
                ...professionalDetails,
                hospital: e.target.value,
              })
            }
            placeholder="Hospital/Clinic"
            className="rounded border-0 p-2 border-bottom"
          />
          <input
            type="text"
            value={professionalDetails.city}
            onChange={(e) =>
              setProfessionalDetails({
                ...professionalDetails,
                city: e.target.value,
              })
            }
            placeholder="City"
            className="rounded border-0 p-2 border-bottom"
          />
          <input
            type="text"
            value={professionalDetails.state}
            onChange={(e) =>
              setProfessionalDetails({
                ...professionalDetails,
                state: e.target.value,
              })
            }
            placeholder="State"
            className="rounded border-0 p-2 border-bottom"
          />
          <input
            type="number"
            value={professionalDetails.yearsOfExperience.years}
            onChange={(e) =>
              setProfessionalDetails({
                ...professionalDetails,
                yearsOfExperience: {
                  ...professionalDetails.yearsOfExperience,
                  years: e.target.value,
                },
              })
            }
            placeholder="Years of Experience"
            className="rounded border-0 p-2 border-bottom"
          />
          <input
            type="number"
            value={professionalDetails.yearsOfExperience.months}
            onChange={(e) =>
              setProfessionalDetails({
                ...professionalDetails,
                yearsOfExperience: {
                  ...professionalDetails.yearsOfExperience,
                  months: e.target.value,
                },
              })
            }
            placeholder="Months of Experience"
            className="rounded border-0 p-2 border-bottom"
          />
          <input
            type="text"
            value={professionalDetails.qualification}
            onChange={(e) =>
              setProfessionalDetails({
                ...professionalDetails,
                qualification: e.target.value,
              })
            }
            placeholder="Qualification"
            className="rounded border-0 p-2 border-bottom"
          />
          <button
            onClick={handleUpdate}
            className="btn btn-primary fs-5 rounded border-0"
          >
            Update Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
