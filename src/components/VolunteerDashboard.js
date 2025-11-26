import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import VolunteerInfoForm from "./VolunteerInfoForm";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const DashboardContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

const VolunteersTable = styled.table`
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

let activeVolunteer = "";

const setVolunteerInfo = (volunteer) => {
    activeVolunteer = volunteer;

};

const setVolunteerSchedule = (volunteer) => {
    activeVolunteer = volunteer;

};

function VolunteerDashboard() {
    const [activeTab, setActiveTab] = useState("list");
    const [volunteers, setVolunteers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [volunteersRes] = await Promise.all([
                    axios.get(`${API_URL}/api/volunteers`),
                ]);

                setVolunteers(volunteersRes.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to load data:", err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredUsers = volunteers.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

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
            </TabsContainer>

            {activeTab === "list" && (
                <p>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ marginBottom: 10, padding: 8, width: '100%' }}
                    />

                <VolunteersTable>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Class 1</TableHeader>
                            <TableHeader>Class 2</TableHeader>
                            <TableHeader>Class 3</TableHeader>
                        </TableRow>
                    </TableHead>
                    <tbody>
                            {filteredUsers.map((vol) => (
                            <TableRow key={vol.id}>
                                <TableCell>
                                    <Button type="button" onClick={() => {
                                        setVolunteerInfo(vol)
                                        setActiveTab("info")
                                        }
                                    }>
                                        {vol.name}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button type="button" onClick={() => {
                                        setVolunteerInfo(vol)
                                        setActiveTab("info")
                                    }
                                    }>
                                    class 1
                                    </Button>
                                </TableCell>

                                <TableCell>
                                    <Button type="button" onClick={() => {
                                        setVolunteerInfo(vol)
                                        setActiveTab("info")
                                    }
                                    }>
                                        class 2
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button type="button" onClick={() => {
                                        setVolunteerInfo(vol)
                                        setActiveTab("info")
                                    }
                                    }>
                                        class 3
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                    </VolunteersTable>
                </p>
            )}

            {activeTab === "info" && (
                <p>
                    <VolunteerInfoForm
                        volunteer={activeVolunteer}
                    />
                </p>
            )}

        </DashboardContainer>
    );
}

export default VolunteerDashboard;
