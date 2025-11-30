import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;


const VolunteerFormContainer = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`;

const VolunteerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const VolunteerTitle = styled.h3`
  color: #2c3e50;
  margin: 0;
`;

const RemoveButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FormField = styled.div`
  flex: 1;
`;

const Label = styled.th`
  text-align: left;
  padding: 0.75rem;
`;

const Text = styled.td`
  padding: 0.75rem;
`;



const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const ClassesSection = styled.div`
  margin-top: 1.5rem;
`;

const ClassesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ClassCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: ${(props) =>
        props.selected ? "rgba(52, 152, 219, 0.1)" : "white"};
  border-color: ${(props) => (props.selected ? "#3498db" : "#ddd")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #3498db;
  }

  ${(props) =>
        props.disabled &&
        `
    opacity: 0.6;
    cursor: not-allowed;
    background: #f1f2f6;
  `}
`;

const ClassName = styled.h4`
  margin: 0 0 0.5rem;
  color: #2c3e50;
`;

const ClassDescription = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #7f8c8d;
`;

const AvailabilityInfo = styled.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: ${(props) => (props.available ? "#27ae60" : "#e74c3c")};
`;

const SelectionCount = styled.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${(props) =>
        props.complete ? "#27ae60" : props.tooMany ? "#e74c3c" : "#7f8c8d"};
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: white;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => (props.primary ? "#2980b9" : "#dfe6e9")};
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;

const CheckinButton = styled.button`
      background: #bdc3c7;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      cursor: pointer;

      &:hover {
        background: #c0392b;
      }

      &:disabled {
        background: #bdc3c7;
        cursor: not-allowed;
      }
    `;


let activeVolunteer = "";

const setActiveVolunteer = (volunteer) => {
    activeVolunteer = volunteer;
};

function VolunteerInfoForm({
    volunteer,
}) {
    const [checkinStatus, setCheckinStatus] = useState('None     ');
    const [checkinButton, setCheckinButton] = useState('Check-In');
    const [loading, setLoading] = useState(true);


    const updateCheckin = (volunteer) => {

        if (volunteer.checkedIn && volunteer.checkedOut) {
            setCheckinStatus('Checked-Out');
            setCheckinButton('Set None');
        }
        else if (volunteer.checkedIn && !volunteer.checkedOut) {
            setCheckinStatus('Checked-In ');
            setCheckinButton('Check-Out');
        }
        else {
            setCheckinStatus('None       ');
            setCheckinButton('Check-In');
        }
    };

    const checkIn = async (volunteer) => {
        try {
            const response = await axios.post(`${API_URL}/api/checkin_volunteer/${activeVolunteer.id}/${checkinButton}`);

            if (response.data.success)
                console.log("checked in");

            if (checkinButton === 'Set None') {
                activeVolunteer.checkedIn = false;
                activeVolunteer.checkedOut = false;
            }
            else if (checkinButton === 'Check-In') {
                activeVolunteer.checkedIn = true;
                activeVolunteer.checkedOut = false;
            }
            else {
                activeVolunteer.checkedIn = true;
                activeVolunteer.checkedOut = true;
            }
            updateCheckin(activeVolunteer);

        } catch (error) {
            console.error("Export failed:", error);
        }
    }

    setActiveVolunteer(volunteer);

    if (loading) {
        updateCheckin(volunteer);
        setLoading(false);
    }

    return (
        <VolunteerFormContainer>
            <VolunteerHeader>
                <VolunteerTitle>Volunteer Information</VolunteerTitle>
            </VolunteerHeader>

            <FormRow>

                <Label>Status:</Label>
                <Text>{checkinStatus}</Text>
                <CheckinButton type="button"
                    onClick={() => {
                        checkIn({ volunteer })
                    }}
                >
                    {checkinButton}
                </CheckinButton>
            </FormRow>


            <FormRow>
                <Label>Full Name: </Label>
                <Text>{volunteer.name}</Text>
            </FormRow>
            <FormRow>
                <Label>Email:</Label>
                <Text>{volunteer.email}</Text>
            </FormRow>
            <FormRow>
                <Label>Phone Number:</Label>
                <Text>{volunteer.phone}</Text>
            </FormRow>
            <FormRow>
                <Label>Shirt Size:</Label>
                <Text>{volunteer.shirt}</Text>
            </FormRow>

        </VolunteerFormContainer>
    );
}

export default VolunteerInfoForm;
