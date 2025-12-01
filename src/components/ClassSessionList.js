import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;



let activeClass = "";
const setActiveClass = (cls) => {
    activeClass = cls;
}  

let activeSessionId = "";
const setActiveSessionId = (sessionId) => {
    activeSessionId = sessionId;
}


function ClassSessionList(
    {
        cls,
        sessionId,
        enrolled,
    }
) {
    if (cls === null || cls === '') {
        return <div>No class selected</div>;
    }

    if (sessionId === null) {
        return <div>No session selected</div>;
    }

    const [roster, setRoster] = useState([]);
    const [loading, setLoading] = useState(true);
    const [checkinStatus, setCheckinStatus] = useState('None     ');
    const [checkinButton, setCheckinButton] = useState('Check-In');

    useEffect(() => {
        const fetchRoster = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/session/${cls.id}/${sessionId}`);

                setRoster(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to load roster:", err);
                setLoading(false);
            }
        };

        fetchRoster();
    }, []);

    const updateCheckin = (student) => {

        if (student.checkedIn && student.checkedOut) {
            setCheckinStatus('Checked-Out');
            setCheckinButton('Set None');
        }
        else if (student.checkedIn && !student.checkedOut) {
            setCheckinStatus('Checked-In ');
            setCheckinButton('Check-Out');
        }
        else {
            setCheckinStatus('None       ');
            setCheckinButton('Check-In');
        }
    };

    const checkIn = async (event)  => {
        try {
            const studentId = event.target.value;

            const response = await axios.post(`${API_URL}/api/checkin_class/${studentId}/${activeClass.id}/${activeSessionId}/${checkinButton}`);

            if (response.data.success)
                console.log("checked in");

            if (checkinButton === 'Set None') {
                student.checkedIn = false;
                student.checkedOut = false;
            }
            else if (checkinButton === 'Check-In') {
                student.checkedIn = true;
                student.checkedOut = false;
            }
            else {
                student.checkedIn = true;
                student.checkedOut = true;
            }
            updateCheckin(student);

            window.location.reload(true);

        } catch (error) {
            console.error("Export failed:", error);
        }
    }

    if (loading) {
        return <div>Loading registrations...</div>;
    }

    if (roster.students.length === 0) {
        return (
            <p>
                <css.Label>{cls.name} - Session {sessionId}</css.Label>
                <p>No registrations found.</p>
            </p>
        );
    }

    setActiveClass(cls);
    setActiveSessionId(sessionId);

   return (
        <p>
           <css.Label>{cls.name} - Session {sessionId} - Enrolled: {enrolled}</css.Label>

                <css.Table>
                    <css.TableHead>
                        <css.TableRow>
                            <css.TableHeader>Name</css.TableHeader>
                            <css.TableHeader>Status</css.TableHeader>
                        </css.TableRow>
                    </css.TableHead>
                <tbody>
                    {
                        roster.students.map((student) => (
                            <css.TableRow key={student.student_id}>
                                <css.TableCell>
                                    {student.student_name}
                                </css.TableCell>

                                <css.TableCell>
                                    <Text>{checkinStatus}</Text>
                                </css.TableCell>

                                <css.TableCell>
                                    <css.DarkButton type="button"
                                        value={student.student_id}
                                        onClick={() => {
                                            checkIn(event)
                                        }}
                                    >
                                        {checkinButton}
                                    </css.DarkButton>
                                </css.TableCell>

                            </css.TableRow>
                        ))
                    }
                    </tbody>
            </css.Table>
         </p>
    );
}

export default ClassSessionList;
