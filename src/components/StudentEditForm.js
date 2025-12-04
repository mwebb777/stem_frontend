import React, { useState, useEffect } from "react";
import styled from "styled-components";
import css from "../styles.js"


function StudentEditForm({
    student,
    classes,
    onChange,
    onRemove,
    isRemoveDisabled,
}) {
    const [selectedShirt, setSelectedShirt] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({
            ...student,
            [name]: value,
        });
    };

    const toggleClassSelection1 = (classId) => {
        const currentSelection = student.class1;

        // If already selected, remove it
        if (currentSelection == classId) {
            currentSelection = '';
            onChange({
                ...student,
                class1: currentSelection,
            });
            return;
        }
        else {
            student.class1 = classId;
            onChange({
                ...student,
                class1: classId,
            });
            return;
        }
    };

    const toggleClassSelection2 = (classId) => {
        const currentSelection = student.class2;

        // If already selected, remove it
        if (currentSelection == classId) {
            currentSelection = '';
            onChange({
                ...student,
                class2: currentSelection,
            });
            return;
        }
        else {
            onChange({
                ...student,
                class2: classId,
            });
            return;
        }
    };

    const toggleClassSelection3 = (classId) => {
        const currentSelection = student.class3;

        // If already selected, remove it
        if (currentSelection == classId) {
            currentSelection = '';
            onChange({
                ...student,
                class3: currentSelection,
            });
            return;
        }
        else {
            onChange({
                ...student,
                class3: classId,
            });
            return;
        }
    };


    const isClassSelected1 = (classId) => {
        return student.class1 == classId;
    };

    const isClassSelected2 = (classId) => {
        return student.class2 == classId;
    };

    const isClassSelected3 = (classId) => {
        return student.class3 == classId;
    };

    const isClassDisabled1 = (cls) => {
        // If already selected, never disabled
        if (isClassSelected1(cls.id)) return false;

        // If at max selections, disable unselected classes
        if (student.class1.length >= 1) return true;

        // If class is full, disable it
        return cls.available_session1 <= 0;
    };

    const isClassDisabled2 = (cls) => {
        // If already selected, never disabled
        if (isClassSelected2(cls.id)) return false;

        // If at max selections, disable unselected classes
        if (student.class2.length >= 1) return true;

        // If class is full, disable it
        return cls.available_session2 <= 0;
    };

    const isClassDisabled3 = (cls) => {
        // If already selected, never disabled
        if (isClassSelected3(cls.id)) return false;

        // If at max selections, disable unselected classes
        if (student.class3.length >= 1) return true;

        // If class is full, disable it
        return cls.available_session3 <= 0;
    };

    const shirtSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

    return (
        <css.FormContainer>
                <css.Title>Student Information</css.Title>
                <css.DarkButton
                    onClick={onRemove}
                    disabled={isRemoveDisabled}
                    type="button"
                >
                    Remove
                </css.DarkButton>

            <css.FormRow>
                <css.FormField>
                    <css.Label htmlFor={`name-${student.id}`}>Full Name</css.Label>
                    <css.Input
                        id={`name-${student.id}`}
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />
                </css.FormField>

                <css.FormField>
                    <css.Label htmlFor="email">Email</css.Label>
                    <css.Input
                        id="email"
                        name="email"
                        type="email"
                        value={student.email}
                        onChange={handleChange}
                    />
                </css.FormField>

                <css.FormField>
                    <css.Label htmlFor="phone">Phone Number</css.Label>
                    <css.Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={student.phone}
                        onChange={handleChange}
                    />
                </css.FormField>

                <css.FormField>
                    <css.Label htmlFor={`age-${student.id}`}>Age</css.Label>
                    <css.Input
                        id={`age-${student.id}`}
                        name="age"
                        type="number"
                        min="5"
                        max="18"
                        value={student.age}
                        onChange={handleChange}
                        required
                    />
                </css.FormField>
            </css.FormRow>

            <css.FormField>
                <css.Label htmlFor={`allergies-${student.id}`}>Food Allergies</css.Label>
                <css.Input
                    id={`allergies-${student.id}`}
                    name="allergies"
                    placeholder="List any food allergies, or type 'None'"
                    value={student.allergies}
                    onChange={handleChange}
                    required
                />
            </css.FormField>

            <css.FormField>
                <css.Label htmlFor={`shirt-${student.id}`}>Shirt Size</css.Label>
                {
                    <select
                    name="shirt"
                    value={student.shirt}
                    onChange= {handleChange}
                >
                    <option value="">-- Choose a shirt size --</option>
                        {shirtSizes.map((sh, idx) => (
                            <option key={idx} value={sh}>
                                {sh}
                            </option>
                        ))}
                </select>
                }
            </css.FormField>

            <css.FormField>
                <css.Label htmlFor={`medicalNotes-${student.id}`}>Medical Notes</css.Label>
                <css.TextArea
                    id={`medicalNotes-${student.id}`}
                    name="medicalNotes"
                    placeholder="Any additional medical information we should know"
                    value={student.medicalNotes}
                    onChange={handleChange}
                />
            </css.FormField>

            <css.FormField>
                <css.Label htmlFor={`name-${student.id}`}>School</css.Label>
                <css.Input
                    id={`school-${student.id}`}
                    name="school"
                    value={student.school}
                    onChange={handleChange}                   
                />
            </css.FormField>

            <css.ClassesSection>
                <css.Label>Workshop Session 1 (Choose 1)</css.Label>
                <css.SelectionCount
                    complete={student.class1.length === 1}
                    tooMany={student.class1.length > 1}
                >
                    {student.class1.length}/1 classes selected
                </css.SelectionCount>

                <css.ClassesList>
                    {classes.map((cls) => (
                        <css.ClassCard
                            key={cls.id}
                            selected={isClassSelected1(cls.id)}
                            disabled={isClassDisabled1(cls)}
                            onClick={() =>
                                !isClassDisabled1(cls) && toggleClassSelection1(cls.id)
                            }
                        >
                            <css.ClassName>{cls.name}</css.ClassName>
                            <css.ClassDescription>{cls.description}</css.ClassDescription>
                            <css.AvailabilityInfo available={cls.available_session1 > 0}>
                                {cls.available_session1 > 0
                                    ? `${cls.available_session1} spots available`
                                    : "Class full"}
                            </css.AvailabilityInfo>
                        </css.ClassCard>
                    ))}
                </css.ClassesList>
            </css.ClassesSection>

            <css.ClassesSection>
                <css.Label>Workshop Session 2 (Choose 1)</css.Label>
                <css.SelectionCount
                    complete={student.class2.length === 1}
                    tooMany={student.class2.length > 1}
                >
                    {student.class2.length}/1 classes selected
                </css.SelectionCount>

                <css.ClassesList>
                    {classes.map((cls) => (
                        <css.ClassCard
                            key={cls.id}
                            selected={isClassSelected2(cls.id)}
                            disabled={isClassDisabled2(cls)}
                            onClick={() =>
                                !isClassDisabled2(cls) && toggleClassSelection2(cls.id)
                            }
                        >
                            <css.ClassName>{cls.name}</css.ClassName>
                            <css.ClassDescription>{cls.description}</css.ClassDescription>
                            <css.AvailabilityInfo available={cls.available_session2 > 0}>
                                {cls.available_session2 > 0
                                    ? `${cls.available_session2} spots available`
                                    : "Class full"}
                            </css.AvailabilityInfo>
                        </css.ClassCard>
                    ))}
                </css.ClassesList>
            </css.ClassesSection>

            <css.ClassesSection>
                <css.Label>Workshop Session 3 (Choose 1)</css.Label>
                <css.SelectionCount
                    complete={student.class3.length === 1}
                    tooMany={student.class3.length > 1}
                >
                    {student.class3.length}/1 classes selected
                </css.SelectionCount>

                <css.ClassesList>
                    {classes.map((cls) => (
                        <css.ClassCard
                            key={cls.id}
                            selected={isClassSelected3(cls.id)}
                            disabled={isClassDisabled3(cls)}
                            onClick={() =>
                                !isClassDisabled3(cls) && toggleClassSelection3(cls.id)
                            }
                        >
                            <css.ClassName>{cls.name}</css.ClassName>
                            <css.ClassDescription>{cls.description}</css.ClassDescription>
                            <css.AvailabilityInfo available={cls.available_session3 > 0}>
                                {cls.available_session3 > 0
                                    ? `${cls.available_session3} spots available`
                                    : "Class full"}
                            </css.AvailabilityInfo>
                        </css.ClassCard>
                    ))}
                </css.ClassesList>
            </css.ClassesSection>

        </css.FormContainer>

    );
}

export default StudentEditForm;
