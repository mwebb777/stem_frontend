import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import ClassInfoForm from "./ClassInfoForm";
import ClassSessionList from "./ClassSessionList";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const DashboardContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.th`
  text-align: left;
  padding: 0.75rem;
`;

const Text = styled.td`
  padding: 0.75rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${(props) => (props.active ? "#3498db" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#34495e")};
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${(props) => (props.active ? "#3498db" : "#f1f2f6")};
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const ClassCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  background: white;
`;

const ClassTitle = styled.h3`
  color: #2c3e50;
  margin: 0 0 0.5rem;
`;

const ProgressContainer = styled.div`
  background: #ecf0f1;
  border-radius: 10px;
  height: 10px;
  overflow: hidden;
  margin: 0.5rem 0;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: ${(props) => {
        const percentage = (props.value / props.max) * 100;
        if (percentage < 60) return "#2ecc71";
        if (percentage < 80) return "#f39c12";
        return "#e74c3c";
    }};
  width: ${(props) => (props.value / props.max) * 100}%;
`;

const RegistrationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StudentsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const ClassTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background: #f1f2f6;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background: #f8f9fa;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem;
`;

const TableCell = styled.td`
  padding: 0.75rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: white;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => (props.primary ? "#2980b9" : "#dfe6e9")};
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;

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
                    axios.get(`${API_URL}/classes`),
                    axios.get(`${API_URL}/registrations`),
                    axios.get(`${API_URL}/students`),
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
        <DashboardContainer>

            <TabsContainer>
                <Tab
                    active={activeTab === "list"}
                    onClick={() => setActiveTab("list")}
                >
                    List
                </Tab>
                <Tab
                    active={activeTab === "info"}
                    onClick={() => setActiveTab("info")}
                >
                    Info
                </Tab>
                <Tab
                    active={activeTab === "session1"}
                    onClick={() => setActiveTab("session1")}
                >
                    Session 1
                </Tab>
                <Tab
                    active={activeTab === "session2"}
                    onClick={() => setActiveTab("session2")}
                >
                    Session 2
                </Tab>
                <Tab
                    active={activeTab === "session3"}
                    onClick={() => setActiveTab("session3")}
                >
                    Session 3
                </Tab>
            </TabsContainer>

            {activeTab === "list" && (
                <ClassTable>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Session 1</TableHeader>
                            <TableHeader>Session 2</TableHeader>
                            <TableHeader>Session 3</TableHeader>
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {classes.map((cls) => (
                            <TableRow key={cls.id}>
                                <TableCell>
                                    <Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("info")
                                    }
                                    }>
                                        {cls.name}
                                    </Button>
                                </TableCell>

                                <TableCell>
                                    <Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("session1")
                                    }
                                    }>
                                        {cls.enrolled_session1}/{cls.capacity}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("session2")
                                    }
                                    }>
                                        {cls.enrolled_session2}/{cls.capacity}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button type="button" onClick={() => {
                                        setActiveClass(cls)
                                        setActiveTab("session3")
                                    }
                                    }>
                                        {cls.enrolled_session3}/{cls.capacity}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </ClassTable>
            )}

            {activeTab === "info" && (
                <p>
                    process.env.BACKEND_URL

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
        </DashboardContainer>
    );
}

export default ClassDashboard;
