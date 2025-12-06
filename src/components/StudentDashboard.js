import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import styles from "../styles.js"

import StudentInfoForm from "./StudentInfoForm";

const API_URL = process.env.REACT_APP_BACKEND_URL;

let activeStudent = "";

const setStudentInfo = (student) => {
    activeStudent = student;

};

const setStudentSchedule = (student) => {
    activeStudent = student;

};

function StudentDashboard() {
    const [activeTab, setActiveTab] = useState("list");
    const [classes, setClasses] = useState([]);
    const [registrations, setRegistrations] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [classesRes, registrationsRes, studentsRes] = await Promise.all([
                    axios.get(`${API_URL}/api/classes`),
                    axios.get(`${API_URL}/api/registrations`),
                    axios.get(`${API_URL}/api/students`),
                ]);

                setClasses(classesRes.data);
                setRegistrations(registrationsRes.data);
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
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <div>Loading dashboard data...</div>;
    }

    if (activeStudent == null || activeStudent == '')
        setStudentInfo(students[0]);

    return (
        <styles.DashboardContainer>

            <styles.TabsContainer>
                <styles.Tab
                    active={activeTab === "list"}
                    onClick={() => setActiveTab("list")}
                >
                    List
                </styles.Tab>
                <styles.Tab
                    active={activeTab === "info"}
                    onClick={() => setActiveTab("info")}
                >
                    Info
                </styles.Tab>
            </styles.TabsContainer>

            {activeTab === "list" && (
                <p>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ marginBottom: 10, padding: 8, width: '100%' }}
                    />
                    <styles.Table>
                        <styles.TableHead>
                            <styles.TableRow>
                                <styles.TableHeader>Name</styles.TableHeader>
                                <styles.TableHeader>Class 1</styles.TableHeader>
                                <styles.TableHeader>Class 2</styles.TableHeader>
                                <styles.TableHeader>Class 3</styles.TableHeader>
                            </styles.TableRow>
                        </styles.TableHead>
                        <tbody>
                            {filteredUsers.map((student) => (
                                <styles.TableRow key={student.id}>
                                    <styles.TableCell>
                                        <styles.Button type="button" onClick={() => {
                                            setStudentInfo(student)
                                            setActiveTab("info")
                                        }
                                        }>
                                            {student.name}
                                        </styles.Button>
                                    </styles.TableCell>
                                    <styles.TableCell>
                                        {student.classNames[0]}
                                    </styles.TableCell>

                                    <styles.TableCell>
                                        {student.classNames[1]}
                                    </styles.TableCell>

                                    <styles.TableCell>
                                        {student.classNames[2]}
                                    </styles.TableCell>
                                </styles.TableRow>
                            ))}
                        </tbody>
                    </styles.Table>
                </p>
            )}

            {activeTab === "info" && (
                <p>
                    <StudentInfoForm
                        student={activeStudent}
                    />
                </p>
            )}

        </styles.DashboardContainer>
    );
}

export default StudentDashboard;
