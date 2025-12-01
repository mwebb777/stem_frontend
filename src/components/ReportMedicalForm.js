import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;



let activeStudent = "";

const setStudentInfo = (student) => {
    activeStudent = student;

};

function ReportMedicalForm() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [studentsRes] = await Promise.all([
                    axios.get(`${API_URL}/api/students`),
                ]);

                setStudents(studentsRes.data);
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
                        <css.TableRow key={student.id}>
                            <css.TableCell>
                                {student.name}
                            </css.TableCell>
                            <css.TableCell>
                                {student.medicalNotes}
                            </css.TableCell>

                        </css.TableRow>
                    ))}
                </tbody>
            </css.Table>

        </css.FormContainer>
    );
}

export default ReportMedicalForm;
