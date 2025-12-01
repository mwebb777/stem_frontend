import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;


const AvailabilityInfo = styled.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: ${(props) => (props.available ? "#27ae60" : "#e74c3c")};
`;

const SelectionCount = styled.div`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${(props) =>
        props.complete ? "#27ae60" : props.tooMany ? "#e74c3c" : "#7f8c8d"};
`;


let activeStudent = "";

const setStudentInfo = (student) => {
    activeStudent = student;

};

function ReportAllergiesForm() {
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
        user.allergies.toLowerCase().length > 0
    );

    if (loading) {
        return <div>Loading dashboard data...</div>;
    }

    return (
        <FormContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Student</TableHeader>
                        <TableHeader>Allergies</TableHeader>
                    </TableRow>
                </TableHead>
                <tbody>
                    {filteredUsers.map((student) => (

                            student.allergies != 'none' ? 
                                <TableRow key={student.id}>
                                    <TableCell>
                                        {student.name}
                                    </TableCell>
                                    <TableCell>
                                        {student.allergies}
                                    </TableCell>

                            </TableRow>
                            : null
                    ))}
                </tbody>
            </Table>

        </FormContainer>
    );
}

export default ReportAllergiesForm;
