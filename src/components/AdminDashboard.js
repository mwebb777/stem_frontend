import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

import StudentDashboard from "./StudentDashboard";
import ReportDashboard from "./ReportDashboard";
import VolunteerDashboard from "./VolunteerDashboard";
import ClassDashboard from "./ClassDashboard";

const API_URL = process.env.REACT_APP_BACKEND_URL;


function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("classes");
    const [classes, setClasses] = useState([]);
    const [registrations, setRegistrations] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

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

    if (loading) {
        return <div>Loading dashboard data...</div>;
    }

    return (
        <css.DashboardContainer>
            <css.Title>Staff Dashboard</css.Title>

            <css.TabsContainer>
                <css.Tab
                    active={activeTab === "classes"}
                    onClick={() => setActiveTab("classes")}
                >
                    Classes
                </css.Tab>
                <css.Tab
                    active={activeTab === "students"}
                    onClick={() => setActiveTab("students")}
                >
                    Students
                </css.Tab>
                <css.Tab
                    active={activeTab === "volunteers"}
                    onClick={() => setActiveTab("volunteers")}
                >
                    Volunteers
                </css.Tab>
                <css.Tab
                    active={activeTab === "repoerts"}
                    onClick={() => setActiveTab("reports")}
                >
                    Reports
                </css.Tab>
            </css.TabsContainer>

            {activeTab === "classes" && (
                <p>
                    <ClassDashboard/>
                </p>
            )}

            {activeTab === "volunteers" && (
                <p>
                    <VolunteerDashboard/>
                </p>
            )}

            {activeTab === "students" && (
                <p>
                    <StudentDashboard/>
                </p>
            )}

            {activeTab === "reports" && (
                <p>
                    <ReportDashboard />
                </p>
            )}

        </css.DashboardContainer>
    );
}

export default AdminDashboard;
