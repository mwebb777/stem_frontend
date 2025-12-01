import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import css from "../styles.js"

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

    if (activeClass === null || activeClass === '')
        setActiveClass(classes[0])

    return (
        <css.DashboardContainer>

            <css.TabsContainer>
                <css.Tab
                    active={activeTab === "list"}
                    onClick={() => setActiveTab("list")}
                >
                    List
                </css.Tab>
                <css.Tab
                    active={activeTab === "info"}
                    onClick={() => setActiveTab("info")}
                >
                    Info
                </css.Tab>
                {/*<css.Tab*/}
                {/*    active={activeTab === "session1"}*/}
                {/*    onClick={() => setActiveTab("session1")}*/}
                {/*>*/}
                {/*    Session 1*/}
                {/*</css.Tab>*/}
                {/*<css.Tab*/}
                {/*    active={activeTab === "session2"}*/}
                {/*    onClick={() => setActiveTab("session2")}*/}
                {/*>*/}
                {/*    Session 2*/}
                {/*</css.Tab>*/}
                {/*<css.Tab*/}
                {/*    active={activeTab === "session3"}*/}
                {/*    onClick={() => setActiveTab("session3")}*/}
                {/*>*/}
                {/*    Session 3*/}
                {/*</css.Tab>*/}
            </css.TabsContainer>

            {activeTab === "list" && (
                <css.Table>
                    <css.TableHead>
                        <css.TableRow>
                            <css.TableHeader>Name</css.TableHeader>
                            <css.TableHeader>Session 1</css.TableHeader>
                            <css.TableHeader>Session 2</css.TableHeader>
                            <css.TableHeader>Session 3</css.TableHeader>
                        </css.TableRow>
                    </css.TableHead>
                    <tbody>
                        {classes.map((cls) => (
                            <css.TableRow key={cls.id}>
                                <css.TableCell>
                                    <css.Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("info")
                                    }
                                    }>
                                        {cls.name}
                                    </css.Button>
                                </css.TableCell>

                                <css.TableCell>
                                    <css.Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("session1")
                                    }
                                    }>
                                        {cls.enrolled_session1}/{cls.capacity}
                                    </css.Button>
                                </css.TableCell>
                                <css.TableCell>
                                    <css.Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("session2")
                                    }
                                    }>
                                        {cls.enrolled_session2}/{cls.capacity}
                                    </css.Button>
                                </css.TableCell>
                                <css.TableCell>
                                    <css.Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("session3")
                                    }
                                    }>
                                        {cls.enrolled_session3}/{cls.capacity}
                                    </css.Button>
                                </css.TableCell>
                            </css.TableRow>
                        ))}
                    </tbody>
                </css.Table>
            )}

            {activeTab === "info" && (
                <p>                    

                    <ClassSessionList
                        cls={activeClass}
                        sessionId="1"
                        enrolled={activeClass.enrolled_session1}
                    />

                    <ClassSessionList
                        cls={activeClass}
                        sessionId="2"
                        enrolled={activeClass.enrolled_session2}
                    />

                    <ClassSessionList
                        cls={activeClass}
                        sessionId="3"
                        enrolled={activeClass.enrolled_session3}
                    />
                </p>
            )}

            {activeTab === "session1" && (
                <p>
                    {classes.map((cls) => (

                        <ClassSessionList
                            cls={cls}
                            sessionId="1"
                            enrolled={cls.enrolled_session1}
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
                            enrolled={cls.enrolled_session2}
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
                            enrolled={cls.enrolled_session3}
                        />

                    ))}
                </p>
            )}
        </css.DashboardContainer>
    );
}

export default ClassDashboard;
