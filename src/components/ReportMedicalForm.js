import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;


function ReportMedicalForm() {
    const [students, setStudents] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [studentsRes, volunteersRes] = await Promise.all([
                    axios.get(`${API_URL}/api/students`),
                    axios.get(`${API_URL}/api/volunteers`),
                ]);

                setStudents(studentsRes.data);
                setVolunteers(volunteersRes.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to load data:", err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredUsers = students.filter(user =>
        user.medicalNotes.toLowerCase().length > 0
    );

    const filteredVolunteers = volunteers.filter(vol =>
        vol.medicalNotes.toLowerCase().length > 0
    );

    if (loading) {
        return <div>Loading dashboard data...</div>;
    }

    return (
        <css.FormContainer>
            <css.Table>
                <css.TableHead>
                    <css.TableRow>
                        <css.TableHeader>Student</css.TableHeader>
                        <css.TableHeader>Medical Notes</css.TableHeader>
                    </css.TableRow>
                </css.TableHead>
                <tbody>
                    {filteredUsers.map((student) => (
                        student.medicalNotes != 'none' ? 
                            <css.TableRow key={student.id}>
                                <css.TableCell>
                                    {student.name}
                                </css.TableCell>
                                <css.TableCell>
                                    {student.medicalNotes}
                                </css.TableCell>
                            </css.TableRow>
                        : null
                    ))}
                </tbody>
            </css.Table>

            <br></br>
            <br></br>

            <css.Table>
                <css.TableHead>
                    <css.TableRow>
                        <css.TableHeader>Volunteer</css.TableHeader>
                        <css.TableHeader>Medical Notes</css.TableHeader>
                    </css.TableRow>
                </css.TableHead>
                <tbody>
                    {filteredVolunteers.map((volunteer) => (
                        volunteer.medicalNotes != 'none' ? 
                            <css.TableRow key={volunteer.id}>
                                <css.TableCell>
                                    {volunteer.name}
                                </css.TableCell>
                                <css.TableCell>
                                    {volunteer.medicalNotes}
                                </css.TableCell>

                            </css.TableRow>
                            : null
                    ))}
                </tbody>
            </css.Table>
        </css.FormContainer>
    );
}

export default ReportMedicalForm;
