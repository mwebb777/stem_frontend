import React from "react";
import styled from "styled-components";
import css from "../styles.js"



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

    if (cls === null) {
        return <div>No class selected</div>;
    }

    return (
        <css.FormContainer>
            <css.Header>
                <css.Title>Workshop Information</css.Title>
            </css.Header>

            <css.FormRow>
                <css.Label>Name: </css.Label>
                <css.Text>{cls.name}</css.Text>
            </css.FormRow>
            <css.FormRow>
                <css.Label>Capacity: </css.Label>
                <css.Text>{cls.capacity}</css.Text>
            </css.FormRow>
            <css.FormRow>
                <css.Label>Description: </css.Label>
                <css.Text>{cls.description}</css.Text>
            </css.FormRow>
            <css.FormRow>
                <css.Label>Instructor: </css.Label>
                <css.Text>{cls.instructor}</css.Text>
            </css.FormRow>
        </css.FormContainer>
    );
}

export default ClassInfoForm;
