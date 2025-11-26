import React from "react";
import styled from "styled-components";

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


function ClassInfoForm({
    cls,
}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({
            ...student,
            [name]: value,
        });
    };

    const toggleClassSelection = (classId) => {
        const currentSelections = [...student.classSelections];
        const classIndex = currentSelections.indexOf(classId);

        // If already selected, remove it
        if (classIndex >= 0) {
            currentSelections.splice(classIndex, 1);
            onChange({
                ...student,
                classSelections: currentSelections,
            });
            return;
        }

        // If not selected and under 3, add it
        if (currentSelections.length < 3) {
            onChange({
                ...student,
                classSelections: [...currentSelections, classId],
            });
            return;
        }
    };

    const isClassSelected = (classId) => {
        return student.classSelections.includes(classId);
    };

    const isClassDisabled = (cls) => {
        // If already selected, never disabled
        if (isClassSelected(cls.id)) return false;

        // If at max selections, disable unselected classes
        if (student.classSelections.length >= 3) return true;

        // If class is full, disable it
        return cls.available_session1 <= 0;
    };

    return (
        <FormContainer>
            <Header>
                <Title>Class Information</Title>
            </Header>

            <FormRow>
                <Label>Name: </Label>
                <Text>{cls.name}</Text>
            </FormRow>
            <FormRow>
                <Label>Capacity: </Label>
                <Text>{cls.capacity}</Text>
            </FormRow>
            <FormRow>
                <Label>Description: </Label>
                <Text>{cls.description}</Text>
            </FormRow>
            <FormRow>
                <Label>Instructor: </Label>
                <Text>{cls.instructor}</Text>
            </FormRow>
        </FormContainer>
    );
}

export default ClassInfoForm;
