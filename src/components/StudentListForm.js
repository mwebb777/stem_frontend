import React from "react";
import styled from "styled-components";
import css from "../styles.js"

function StudentForm({
    student,
    classes,
    onChange,
    onRemove,
    isRemoveDisabled,
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
        <css.FormContainer>
            <css.Header>
                <css.Title>Student Information</css.Title>
                <css.DarkButton
                    onClick={onRemove}
                    disabled={isRemoveDisabled}
                    type="button"
                >
                    Remove
                </css.DarkButton>
            </css.Header>

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
                        required
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
                        required
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
                <css.Input
                    id={`shirt-${student.id}`}
                    name="shirt"
                    placeholder="XS, S, M, L, XL, XXL, XXXL"
                    value={student.shirt}
                    onChange={handleChange}
                    required
                />
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
                <Label htmlFor={`name-${student.id}`}>School</Label>
                <Input
                    id={`school-${student.id}`}
                    name="school"
                    value={student.school}
                    onChange={handleChange}                   
                />
            </css.FormField>

            <css.ClassesSection>
                <css.Label>Class Selection (Choose 3)</css.Label>
                <css.SelectionCount
                    complete={student.classSelections.length === 3}
                    tooMany={student.classSelections.length > 3}
                >
                    {student.classSelections.length}/3 classes selected
                </css.SelectionCount>

                <css.ClassesList>
                    {classes.map((cls) => (
                        <css.ClassCard
                            key={cls.id}
                            selected={isClassSelected(cls.id)}
                            disabled={isClassDisabled(cls)}
                            onClick={() =>
                                !isClassDisabled(cls) && toggleClassSelection(cls.id)
                            }
                        >
                            <css.ClassName>{cls.name}</css.ClassName>
                            <css.ClassDescription>{cls.description}</css.ClassDescription>
                            <css.AvailabilityInfo available={cls.available_sessoin1 > 0}>
                                {cls.available_session1 > 0
                                    ? `${cls.available_session1} spots available`
                                    : "Class full"}
                            </css.AvailabilityInfo>
                        </css.ClassCard>
                    ))}
                </css.ClassesList>
            </css.ClassesSection>
        </css.FormContainer>
    );
}

export default StudentForm;
