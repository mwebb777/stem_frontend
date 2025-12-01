import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;


const ListContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormContainer = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  color: #2c3e50;
  margin: 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background: #f1f2f6;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem;
`;

const TableCell = styled.td`
  padding: 0.75rem;
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



let activeStudent = "";

const setActiveStudent = (student) => {
    activeStudent = student;
};
function StudentInfoForm({
    student,
}) {

    const [checkinStatus, setCheckinStatus] = useState('None     ');
    const [checkinButton, setCheckinButton] = useState('Check-In');

    if (student === null || student === '') {
        return <div>No student selected</div>;
    }

    setActiveStudent(student);

    const updateCheckin = (student) => {

        if (student.checkedIn && student.checkedOut) {
            setCheckinStatus('Checked-Out');
            setCheckinButton('Set None');
        }
        else if (student.checkedIn && !student.checkedOut) {
            setCheckinStatus('Checked-In ');
            setCheckinButton('Check-Out');
        }
        else {
            setCheckinStatus('None       ');
            setCheckinButton('Check-In');
        }
    };

    const checkIn = async(student) => {
        try {
            const response = await axios.post(`${API_URL}/api/checkin/${activeStudent.id}/${checkinButton}`);

            if (response.data.success)
                console.log("checked in");

            if (checkinButton === 'Set None') {
                activeStudent.checkedIn = false;
                activeStudent.checkedOut = false;
            }
            else if (checkinButton === 'Check-In') {
                activeStudent.checkedIn = true;
                activeStudent.checkedOut = false;
            }
            else {
                activeStudent.checkedIn = true;
                activeStudent.checkedOut = true;
            }
            updateCheckin(activeStudent);

        } catch (error) {
            console.error("Export failed:", error);
        }
    }


    return (
        <FormContainer>
            <Header>
                <Title>Student Information</Title>
            </Header>

            <FormRow>
                <Label>Status:</Label>
                <Text>{checkinStatus}</Text>
                <CheckinButton type="button"
                    onClick={() => {
                        checkIn({ student })
                    }}
                >
                    {checkinButton}
                </CheckinButton>

            </FormRow>

            <FormRow>
                <Label>Class 1: </Label>
                <Text>{student.classNames[0]}</Text>
            </FormRow>
            <FormRow>
                <Label>Class 2: </Label>
                <Text>{student.classNames[1]}</Text>
            </FormRow>
            <FormRow>
                <Label>Class 3: </Label>
                <Text>{student.classNames[2]}</Text>
            </FormRow>
            <FormRow>                
                <Label>Full Name: </Label>
                <Text>{student.name}</Text>
            </FormRow>
            <FormRow>
                <Label>Age: </Label>
                <Text>{student.age}</Text>
            </FormRow>
            <FormRow>
                <Label>Email:</Label>
                <Text>{student.email}</Text>
            </FormRow>
            <FormRow>
                <Label>Phone Number:</Label>
                <Text>{student.phone}</Text>
            </FormRow>
            <FormRow>
                <Label>Food Allergies:</Label>
                <Text>{student.allergies}</Text>
            </FormRow>
            <FormRow>
                <Label>Shirt Size:</Label>
                <Text>{student.shirt}</Text>
            </FormRow>
            <FormRow>
                <Label>Medical Notes:</Label>
                <Text>{student.medicalNotes}</Text>
            </FormRow>
            <FormRow>
                <Label>School:</Label>
                <Text>{student.school}</Text>
            </FormRow>

        </FormContainer>
    );
}

export default StudentInfoForm;
