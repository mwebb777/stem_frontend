import React, { useState } from "react";
import styled from "styled-components";

const StudentFormContainer = styled.div`
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
`;

const StudentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const StudentTitle = styled.h3`
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

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
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

function StudentEditForm({
    student,
    classes,
    onChange,
    onRemove,
    isRemoveDisabled,
}) {
    const [selectedClass1, setSelectedClass1] = useState('');
    const [selectedClass2, setSelectedClass2] = useState('');
    const [selectedClass3, setSelectedClass3] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({
            ...student,
            [name]: value,
        });
    };


    const handleClassChange1 = (e) => {
        const { name, value } = e.target;
        student.class1 = value;
        setSelectedClass1(value);
    };

    const handleClassChange2 = (e) => {
        const { name, value } = e.target;
        student.class2 = value;
        setSelectedClass2(value);
    };

    const handleClassChange3 = (e) => {
        const { name, value } = e.target;
        student.class3 = value;
        setSelectedClass3(value);
    };

    return (
        <StudentFormContainer>



            <StudentHeader>
                <StudentTitle>Student Information</StudentTitle>
                <RemoveButton
                    onClick={onRemove}
                    disabled={isRemoveDisabled}
                    type="button"
                >
                    Remove
                </RemoveButton>
            </StudentHeader>

            <FormRow>
                <FormField>
                    <Label htmlFor={`name-${student.id}`}>Full Name</Label>
                    <Input
                        id={`name-${student.id}`}
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />
                </FormField>

                <FormField>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={student.email}
                        onChange={handleChange}
                    />
                </FormField>

                <FormField>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={student.phone}
                        onChange={handleChange}
                    />
                </FormField>

                <FormField>
                    <Label htmlFor={`age-${student.id}`}>Age</Label>
                    <Input
                        id={`age-${student.id}`}
                        name="age"
                        type="number"
                        min="5"
                        max="18"
                        value={student.age}
                        onChange={handleChange}
                        required
                    />
                </FormField>
            </FormRow>

            <FormField>
                <Label htmlFor={`allergies-${student.id}`}>Food Allergies</Label>
                <Input
                    id={`allergies-${student.id}`}
                    name="allergies"
                    placeholder="List any food allergies, or type 'None'"
                    value={student.allergies}
                    onChange={handleChange}
                    required
                />
            </FormField>

            <FormField>
                <Label htmlFor={`shirt-${student.id}`}>Shirt Size</Label>
                <Input
                    id={`shirt-${student.id}`}
                    name="shirt"
                    placeholder="XS, S, M, L, XL, XXL, XXXL"
                    value={student.shirt}
                    onChange={handleChange}
                    required
                />
            </FormField>

            <FormField>
                <Label htmlFor={`medicalNotes-${student.id}`}>Medical Notes</Label>
                <TextArea
                    id={`medicalNotes-${student.id}`}
                    name="medicalNotes"
                    placeholder="Any additional medical information we should know"
                    value={student.medicalNotes}
                    onChange={handleChange}
                />
            </FormField>

            <FormField>
                <Label htmlFor={`name-${student.id}`}>School</Label>
                <Input
                    id={`school-${student.id}`}
                    name="school"
                    value={student.school}
                    onChange={handleChange}                   
                />
            </FormField>


            <FormField>
                <Label>Class 1</Label>

                <select id="class-select" name="class1" onChange={handleClassChange1}>
                    {classes.map((cls) => (
                        <option name={cls.name} value={cls.name}>
                            {cls.name}  {cls.enrolled_session1}/{cls.capacity}
                        </option>
                    ))}
                </select>

            </FormField>

            <FormField>
                <Label>Class 2</Label>

                <select id="class-select" name="class2" onChange={handleClassChange2}>
                    {classes.map((cls) => (
                        <option name={cls.name} value={cls.name}>
                            {cls.name}  {cls.enrolled_session1}/{cls.capacity}
                        </option>
                    ))}
                </select>

            </FormField>

            <FormField>
                <Label>Class 3</Label>

                <select id="class-select" name="class3" onChange={handleClassChange3}>
                    {classes.map((cls) => (
                            <option name={cls.name} value={cls.name}>
                            {cls.name}  {cls.enrolled_session1}/{cls.capacity}
                            </option>
                    ))}
                </select>

            </FormField>

        </StudentFormContainer>
    );
}

export default StudentEditForm;
