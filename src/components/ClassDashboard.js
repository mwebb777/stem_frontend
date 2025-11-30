import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import styles from "../styles.js"

import ClassInfoForm from "./ClassInfoForm";
import ClassSessionList from "./ClassSessionList";

const API_URL = process.env.REACT_APP_BACKEND_URL;


let activeClass = "";

const setActiveClass = (cls) => {
    activeClass = cls;
};


function ClassDashboard() {
    const [activeTab, setActiveTab] = useState("list");
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

    setActiveClass(classes[0])

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
                <styles.Tab
                    active={activeTab === "session1"}
                    onClick={() => setActiveTab("session1")}
                >
                    Session 1
                </styles.Tab>
                <styles.Tab
                    active={activeTab === "session2"}
                    onClick={() => setActiveTab("session2")}
                >
                    Session 2
                </styles.Tab>
                <styles.Tab
                    active={activeTab === "session3"}
                    onClick={() => setActiveTab("session3")}
                >
                    Session 3
                </styles.Tab>
            </styles.TabsContainer>

            {activeTab === "list" && (
                <styles.Table>
                    <styles.TableHead>
                        <styles.TableRow>
                            <styles.TableHeader>Name</styles.TableHeader>
                            <styles.TableHeader>Session 1</styles.TableHeader>
                            <styles.TableHeader>Session 2</styles.TableHeader>
                            <styles.TableHeader>Session 3</styles.TableHeader>
                        </styles.TableRow>
                    </styles.TableHead>
                    <tbody>
                        {classes.map((cls) => (
                            <styles.TableRow key={cls.id}>
                                <styles.TableCell>
                                    <styles.Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("info")
                                    }
                                    }>
                                        {cls.name}
                                    </styles.Button>
                                </styles.TableCell>

                                <styles.TableCell>
                                    <styles.Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("session1")
                                    }
                                    }>
                                        {cls.enrolled_session1}/{cls.capacity}
                                    </styles.Button>
                                </styles.TableCell>
                                <styles.TableCell>
                                    <styles.Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("session2")
                                    }
                                    }>
                                        {cls.enrolled_session2}/{cls.capacity}
                                    </styles.Button>
                                </styles.TableCell>
                                <styles.TableCell>
                                    <styles.Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("session3")
                                    }
                                    }>
                                        {cls.enrolled_session3}/{cls.capacity}
                                    </styles.Button>
                                </styles.TableCell>
                            </styles.TableRow>
                        ))}
                    </tbody>
                </styles.Table>
            )}

            {activeTab === "info" && (
                <p>                    

                    <ClassSessionList
                        cls={activeClass}
                        sessionId="1"
                    />

                    <ClassSessionList
                        cls={activeClass}
                        sessionId="2"
                    />

                    <ClassSessionList
                        cls={activeClass}
                        sessionId="3"
                    />
                </p>
            )}

            {activeTab === "session1" && (
                <p>
                    {classes.map((cls) => (

                        <ClassSessionList
                            cls={cls}
                            sessionId="1"
                        />
                    ))}
                </p>
            )}

            {activeTab === "session2" && (
                <p>
                    {classes.map((cls) => (

                        <ClassSessionList
                            cls={cls}
                            sessionId="2"
                        />
                    ))}
                </p>
            )}

            {activeTab === "session3" && (
                <p>
                    {classes.map((cls) => (

                        <ClassSessionList
                            cls={cls}
                            sessionId="3"
                        />
                    ))}
                </p>
            )}
        </styles.DashboardContainer>
    );
}

export default ClassDashboard;
