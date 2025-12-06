import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

import StudentEditForm from "./StudentEditForm";

import stemGroupImage from "../images/stem-group.jpg"

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
        alternateName: "",
        alternatePhone: "",
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
        <css.Section>
            <css.ListContainer>

                <css.FormTitle>2026 STEM-ING Event</css.FormTitle>

                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

                    <p style={{ flex: 1 }}>

                        <p><strong>University System of Maryland at Southern Maryland</strong></p>
                        <css.UrlLink to="https://www.google.com/maps/place/University+System+of+Maryland+at+Southern+Maryland/@38.3118954,-76.5462287,17.5z/data=!4m14!1m7!3m6!1s0x89b76605c3fac927:0xcb7d8b4b898010ae!2sCollege+of+Southern+Maryland,+Leonardtown+Campus!8m2!3d38.297538!4d-76.6333291!16s%2Fg%2F1tdbrrsw!3m5!1s0x89b763f52d07a4ff:0x6cdd6f6668f331ee!8m2!3d38.3125991!4d-76.5450797!16s%2Fg%2F1tfyfg4w?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D">
                            44219 Airport Rd, California, MD 20619
                        </css.UrlLink>
                        <p>May 1, 2026 from 8:30am to 4pm EDT</p>
                        <p>Home Site: 
                            <css.UrlLink to="https://www.stem-ing.org/">  stem-ing.org</css.UrlLink>
                        </p>
                    </p>

                    <img src={stemGroupImage} alt="Example" style={{ width: "250px" }} />
                </div>

                <br></br>

                <css.ListContainer>
                    <css.Title>Drop Off</css.Title>
                    <p>You must sign in your student at the beginning of the day</p>
                    <p>Preceed to registration table to receive welcome packet</p>
                    <p><strong>ID is required</strong></p>
                </css.ListContainer>

                <br></br>

                <css.ListContainer>
                    <css.Title>Pick Up</css.Title>
                    <p>You must sign out your student</p>
                    <p><strong>ID is required</strong></p>
                </css.ListContainer>
            </css.ListContainer>

            <br></br>

        <css.FormContainer>
            <css.FormTitle>Student Registration</css.FormTitle>

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

                    <css.FormField>
                        <css.Label htmlFor="alternateName">Alternate POC Full Name</css.Label>
                        <css.Input
                            id="alternateName"
                            name="alternateName"
                            value={parentInfo.alternateName}
                            onChange={handleParentInfoChange}
                            required
                        />
                    </css.FormField>

                    <css.FormField>
                        <css.Label htmlFor="alternatePhone">Alternate POC Phone Number</css.Label>
                        <css.Input
                            id="alternatePhone"
                            name="alternatePhone"
                            type="tel"
                            value={parentInfo.alternatePhone}
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
        </css.Section>
    );
}

export default RegistrationForm;
