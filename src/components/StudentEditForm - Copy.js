import React, { useState } from "react";
import styled from "styled-components";
import ss from "styles.js"


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
        <ss.FormContainer>



            <ss.Header>
                <ss.Title>Student Information</ss.Title>
                <ss.DarkButton
                    onClick={onRemove}
                    disabled={isRemoveDisabled}
                    type="button"
                >
                    Remove
                </ss.DarkButton>
            </ss.Header>

            <ss.FormRow>
                <ss.FormField>
                    <ss.Label htmlFor={`name-${student.id}`}>Full Name</ss.Label>
                    <ss.Input
                        id={`name-${student.id}`}
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />
                </ss.FormField>

                <ss.FormField>
                    <ss.Label htmlFor="email">Email</ss.Label>
                    <ss.Input
                        id="email"
                        name="email"
                        type="email"
                        value={student.email}
                        onChange={handleChange}
                    />
                </ss.FormField>

                <ss.FormField>
                    <ss.Label htmlFor="phone">Phone Number</ss.Label>
                    <ss.Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={student.phone}
                        onChange={handleChange}
                    />
                </ss.FormField>

                <ss.FormField>
                    <ss.Label htmlFor={`age-${student.id}`}>Age</ss.Label>
                    <ss.Input
                        id={`age-${student.id}`}
                        name="age"
                        type="number"
                        min="5"
                        max="18"
                        value={student.age}
                        onChange={handleChange}
                        required
                    />
                </ss.FormField>
            </ss.FormRow>

            <ss.FormField>
                <ss.Label htmlFor={`allergies-${student.id}`}>Food Allergies</ss.Label>
                <ss.Input
                    id={`allergies-${student.id}`}
                    name="allergies"
                    placeholder="List any food allergies, or type 'None'"
                    value={student.allergies}
                    onChange={handleChange}
                    required
                />
            </ss.FormField>

            <ss.FormField>
                <Label htmlFor={`shirt-${student.id}`}>Shirt Size</Label>
                <Input
                    id={`shirt-${student.id}`}
                    name="shirt"
                    placeholder="XS, S, M, L, XL, XXL, XXXL"
                    value={student.shirt}
                    onChange={handleChange}
                    required
                />
            </ss.FormField>

            <ss.FormField>
                <ss.Label htmlFor={`medicalNotes-${student.id}`}>Medical Notes</ss.Label>
                <ss.TextArea
                    id={`medicalNotes-${student.id}`}
                    name="medicalNotes"
                    placeholder="Any additional medical information we should know"
                    value={student.medicalNotes}
                    onChange={handleChange}
                />
            </ss.FormField>

            <ss.FormField>
                <ss.Label htmlFor={`name-${student.id}`}>School</ss.Label>
                <ss.Input
                    id={`school-${student.id}`}
                    name="school"
                    value={student.school}
                    onChange={handleChange}                   
                />
            </ss.FormField>


            <ss.FormField>
                <ss.Label>Class 1</ss.Label>

                <select id="class-select" name="class1" onChange={handleClassChange1}>
                    {classes.map((cls) => (
                        <option name={cls.name} value={cls.name}>
                            {cls.name}  {cls.enrolled_session1}/{cls.capacity}
                        </option>
                    ))}
                </select>

            </ss.FormField>

            <ss.FormField>
                <Label>Class 2</Label>

                <select id="class-select" name="class2" onChange={handleClassChange2}>
                    {classes.map((cls) => (
                        <option name={cls.name} value={cls.name}>
                            {cls.name}  {cls.enrolled_session1}/{cls.capacity}
                        </option>
                    ))}
                </select>

            </ss.FormField>

            <ss.FormField>
                <ss.Label>Class 3</ss.Label>

                <select id="class-select" name="class3" onChange={handleClassChange3}>
                    {classes.map((cls) => (
                            <option name={cls.name} value={cls.name}>
                            {cls.name}  {cls.enrolled_session1}/{cls.capacity}
                            </option>
                    ))}
                </select>

            </ss.FormField>

        </ss.FormContainer>
    );
}

export default StudentEditForm;
