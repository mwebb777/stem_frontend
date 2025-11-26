import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import StudentInfoForm from "./StudentInfoForm";
import StudentScheduleForm from "./StudentScheduleForm";
import ReportAllergiesForm from "./ReportAllergiesForm";
import ReportMedicalForm from "./ReportMedicalForm";

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

const StudentsTable = styled.table`
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
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

let activeStudent = "";

const setStudentInfo = (student) => {
    activeStudent = student;
   
};

const setStudentSchedule = (student) => {
    activeStudent = student;
   
};

function ReportDashboard() {
    const [activeTab, setActiveTab] = useState("stats");
    const [classes, setClasses] = useState([]);
    const [students, setStudents] = useState([]);
    const [studentShirts, setStudentShirts] = useState([]);
    const [volunteerShirts, setVolunteerShirts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [classesRes, studentRes, studentShirtRes, volunteerShirtRes] = await Promise.all([
                    axios.get(`${API_URL}/api/classes`),
                    axios.get(`${API_URL}/api/students`),
                    axios.get(`${API_URL}/api/student_shirts`),
                    axios.get(`${API_URL}/api/volunteer_shirts`),
                ]);

                setClasses(classesRes.data);
                setStudents(studentRes.data);
                setExportStudents(exportStudentRes.data)
                setStudentShirts(studentShirtRes.data);
                setVolunteerShirts(volunteerShirtRes.data);
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

    const handleStudentExport = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/exportStudents`, {
                responseType: "blob" // important!
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "students.csv");
            document.body.appendChild(link);
            link.click();
            link.remove();

        } catch (error) {
            console.error("Export failed:", error);
        }
    };

    const handleVolunteerExport = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/exportVolunteers`, {
                responseType: "blob" // important!
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "volunteers.csv");
            document.body.appendChild(link);
            link.click();
            link.remove();

        } catch (error) {
            console.error("Export failed:", error);
        }
    };

    const handleParentsExport = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/exportParents`, {
                responseType: "blob" // important!
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "parents.csv");
            document.body.appendChild(link);
            link.click();
            link.remove();

        } catch (error) {
            console.error("Export failed:", error);
        }
    };

    return (
        <DashboardContainer>
            <TabsContainer>
                <Tab
                    active={activeTab === "stats"}
                    onClick={() => setActiveTab("stats")}
                >
                    Stats
                </Tab>
                <Tab
                    active={activeTab === "allergies"}
                    onClick={() => setActiveTab("allergies")}
                >
                    Allergies
                </Tab>
                <Tab
                    active={activeTab === "medical"}
                    onClick={() => setActiveTab("medical")}
                >
                    Medical
                </Tab>
            </TabsContainer>

            {activeTab === "stats" && (
                <p>
                    <Title>Student Shirt Sizes</Title>

                    <StudentsTable>
                        <TableHead>
                            <TableRow>
                                <TableHeader>XS</TableHeader>
                                <TableHeader>S</TableHeader>
                                <TableHeader>M</TableHeader>
                                <TableHeader>L</TableHeader>
                                <TableHeader>XL</TableHeader>
                                <TableHeader>XXL</TableHeader>
                                <TableHeader>XXXL</TableHeader>
                            </TableRow>
                        </TableHead>
                        <tbody>
                                <TableRow>
                                <TableCell>{studentShirts.xs}</TableCell>
                                <TableCell>{studentShirts.s}</TableCell>
                                <TableCell>{studentShirts.m}</TableCell>
                                <TableCell>{studentShirts.l}</TableCell>
                                <TableCell>{studentShirts.xl}</TableCell>
                                <TableCell>{studentShirts.xxl}</TableCell>
                                <TableCell>{studentShirts.xxxl}</TableCell>
                                </TableRow>
                        </tbody>
                    </StudentsTable>


                    <p>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                    <Title>Volunteer Shirt Sizes</Title>

                    <StudentsTable>
                        <TableHead>
                            <TableRow>
                                <TableHeader>XS</TableHeader>
                                <TableHeader>S</TableHeader>
                                <TableHeader>M</TableHeader>
                                <TableHeader>L</TableHeader>
                                <TableHeader>XL</TableHeader>
                                <TableHeader>XXL</TableHeader>
                                <TableHeader>XXXL</TableHeader>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            <TableRow>
                                <TableCell>{volunteerShirts.xs}</TableCell>
                                <TableCell>{volunteerShirts.s}</TableCell>
                                <TableCell>{volunteerShirts.m}</TableCell>
                                <TableCell>{volunteerShirts.l}</TableCell>
                                <TableCell>{volunteerShirts.xl}</TableCell>
                                <TableCell>{volunteerShirts.xxl}</TableCell>
                                <TableCell>{volunteerShirts.xxxl}</TableCell>
                            </TableRow>
                        </tbody>
                    </StudentsTable>

                    <p>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                    <Title>Exports</Title>

                    <button onClick={handleStudentExport}>
                        Export Students CSV
                    </button>

                    <br></br>
                    <br></br>

                    <button onClick={handleVolunteerExport}>
                        Export Volunteers CSV
                    </button>

                    <br></br>
                    <br></br>

                    <button onClick={handleParentsExport}>
                        Export Parents CSV
                    </button>

                </p>
            )}

            {activeTab === "allergies" && (
                <p>
                    <ReportAllergiesForm/>
                </p>
            )}

            {activeTab === "medical" && (
                <p>
                    <ReportMedicalForm/>
                </p>
            )}

        </DashboardContainer>
    );
}

export default ReportDashboard;
