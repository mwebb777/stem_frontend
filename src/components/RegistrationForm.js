import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

import StudentEditForm from "./StudentEditForm";

const API_URL = process.env.REACT_APP_BACKEND_URL;



function RegistrationForm() {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isWaiver1Checked, setWaiver1Checked] = useState(false);
    const [isWaiver2Checked, setWaiver2Checked] = useState(false);
    const [isWaiver3Checked, setWaiver3Checked] = useState(false);
    const navigate = useNavigate();

    const [parentInfo, setParentInfo] = useState({
        name: "",
        password: "",
        email: "",
        phone: "",
    });

    const [students, setStudents] = useState([
        {
            id: Date.now().toString(36) + Math.random().toString(36).slice(2),
            name: "",
            email: "",
            phone: "",
            age: "",
            allergies: "",
            shirt: "",
            medicalNotes: "",
            class1: "",
            class2: "",
            class3: "",
            checkedIn: false,
            checkedOut: false,
        },
    ]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/classes`);
                setClasses(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load available classes. Please try again later.");
                setLoading(false);
            }
        };

        fetchClasses();
    }, []);

    const handleParentInfoChange = (e) => {
        const { name, value } = e.target;
        setParentInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleStudentChange = (id, updatedStudent) => {
        setStudents((prev) =>
            prev.map((student) => (student.id === id ? updatedStudent : student)),
        );
    };

    const addStudent = () => {
        setStudents((prev) => [
            ...prev,
            {
                id: Date.now().toString(36) + Math.random().toString(36).slice(2), 
                name: "",
                email: "", 
                phone: "",
                age: "",
                allergies: "",
                shirt: "",
                medicalNotes: "",
                class1: "",
                class2: "",
                class3: "",
                checkedIn: false,
                checkedOut: false,
            },
        ]);
    };

    const removeStudent = (id) => {
        setStudents((prev) => prev.filter((student) => student.id !== id));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(null);
            const response = await axios.post(`${API_URL}/api/register`, {
                parentInfo,
                students,
            });

            if (response.data.success) {
                navigate(`/success/${response.data.registrationId}`);
            }
        } catch (err) {
            setError(
                err.response?.data?.message || "Registration failed. Please try again.",
            );
        }
    };

    const isFormValid = () => {
        if (!parentInfo.name || !parentInfo.email || !parentInfo.phone ||
            !parentInfo.password ||!isWaiver1Checked || !isWaiver2Checked || !isWaiver3Checked) {
            return false;
        }

        for (const student of students) {
            if (
                !student.name ||
                !student.age ||
                !student.shirt ||
                !student.class1 ||
                !student.class2 ||
                !student.class3 
            ) {
                return false;
            }
        }

        return true;
    };

    if (loading) {
        return <div>Loading class information...</div>;
    }

    return (
        <css.FormContainer>
            <css.FormTitle>STEM 2026 Registration</css.FormTitle>

            {error && <css.ErrorMessage>{error}</css.ErrorMessage>}

            <form onSubmit={handleSubmit}>
                <css.Section>
                    <css.Title>Parent/Guardian Information</css.Title>
                    <css.FormField>
                        <css.Label htmlFor="parentName">Full Name</css.Label>
                        <css.Input
                            id="parentName"
                            name="name"
                            value={parentInfo.name}
                            onChange={handleParentInfoChange}
                            required
                        />
                    </css.FormField>

                    <css.FormField>
                        <css.Label htmlFor="password">Password</css.Label>
                        <css.Input
                            id="password"
                            name="password"
                            value={parentInfo.password}
                            onChange={handleParentInfoChange}
                            required
                        />
                    </css.FormField>


                    <css.FormField>
                        <css.Label htmlFor="parentEmail">Email</css.Label>
                        <css.Input
                            id="parentEmail"
                            name="email"
                            type="email"
                            value={parentInfo.email}
                            onChange={handleParentInfoChange}
                            required
                        />
                    </css.FormField>

                    <css.FormField>
                        <css.Label htmlFor="parentPhone">Phone Number</css.Label>
                        <css.Input
                            id="parentPhone"
                            name="phone"
                            type="tel"
                            value={parentInfo.phone}
                            onChange={handleParentInfoChange}
                            required
                        />
                    </css.FormField>

                    <br></br>
                    <br></br>

                    {students.map((student) => (
                        <StudentEditForm
                            key={student.id}
                            student={student}
                            classes={classes}
                            onChange={(updatedStudent) =>
                                handleStudentChange(student.id, updatedStudent)
                            }
                            onRemove={() => removeStudent(student.id)}
                            isRemoveDisabled={students.length === 1}
                        />

                    ))}

                    <css.ButtonContainer>
                        <css.DarkButton type="button" onClick={addStudent}>
                            Add Another Student
                        </css.DarkButton>
                    </css.ButtonContainer>
                </css.Section>


                <css.Section>
                    <css.Title>Waiver 1</css.Title>
                    <css.ListContainer>
                        <p>
                        This is waiver one.
                        </p>
                    </css.ListContainer>
                </css.Section>

                <css.Label> Accept Waiver 1: {'  '}
                    <css.Input
                        type="checkbox"
                        checked={isWaiver1Checked}
                        onChange={(e) => setWaiver1Checked(e.target.checked)}
                    />
                </css.Label>

                <css.Section>
                    <css.Title>Waiver 2</css.Title>
                    <css.ListContainer>
                        <p>
                            This is waiver two.
                        </p>
                    </css.ListContainer>
                </css.Section>

                <css.Label> Accept Waiver 2: {'  '}
                    <css.Input
                        type="checkbox"
                        checked={isWaiver2Checked}
                        onChange={(e) => setWaiver2Checked(e.target.checked)}
                    />
                </css.Label>

                <css.Section>
                    <css.Title>Waiver 3</css.Title>
                    <css.ListContainer>
                        <p>
                            This is waiver three.
                        </p>
                    </css.ListContainer>
                </css.Section>

                <css.Label> Accept Waiver 3: {'  '}
                    <css.Input
                    type="checkbox"
                    checked={isWaiver3Checked}
                    onChange={(e) => setWaiver3Checked(e.target.checked)}
                    />
                </css.Label>


                <css.SubmitButton type="submit" disabled={!isFormValid()} primary>
                    Complete Registration
                </css.SubmitButton>
            </form>
        </css.FormContainer>
    );
}

export default RegistrationForm;
