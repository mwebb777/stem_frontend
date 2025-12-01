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
    const [checkinStatus, setCheckinStatus] = useState([]);
    const [checkinButton, setCheckinButton] = useState([]);

    useEffect(() => {
        const fetchRoster = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/session/${cls.id}/${sessionId}`);

                setRoster(response.data);
                setLoading(false);

                let statusText = '';
                let buttonText = '';

                const nextStatusList = [...checkinStatus];
                const nextButtonList = [...checkinButton];

                for (let i = 0; i < response.data.students.length; i++) {

                    let student = response.data.students[i];

                    if (student.checkedIn && student.checkedOut) {
                        statusText = 'Checked-Out';
                        buttonText = 'Set None';
                    }
                    else if (student.checkedIn && !student.checkedOut) {
                        statusText = 'Checked-In ';
                        buttonText = 'Check-Out';
                    }
                    else {
                        statusText = 'None       ';
                        buttonText = 'Check-In';
                    }

                    nextStatusList.push({ text: statusText, });
                    nextButtonList.push({ text: buttonText, });
                }
                setCheckinStatus(nextStatusList);
                setCheckinButton(nextButtonList);

            } catch (err) {
                console.error("Failed to load roster:", err);
                setLoading(false);
            }
        };

        fetchRoster();
    }, []);

    const updateCheckin = (student, index) => {

        let statusText = '';
        let buttonText = '';

        if (student.checkedIn && student.checkedOut) {
            statusText = 'Checked-Out';
            buttonText = 'Set None';
        }
        else if (student.checkedIn && !student.checkedOut) {
            statusText = 'Checked-In ';
            buttonText = 'Check-Out';
        }
        else {
            statusText = 'None       ';
            buttonText = 'Check-In';
        }

        let nextStatusList = [...checkinStatus];
        let nextButtonList = [...checkinButton];

        nextStatusList[index].text = statusText;
        nextButtonList[index].text = buttonText;

        setCheckinStatus(nextStatusList);
        setCheckinButton(nextButtonList);

    //    setCheckinStatus((prev) => [
    //        prev.map((status) => (status.text = statusText)),
    //    ]);

    //    setCheckinButton((prev) => [
    //        prev.map((status) => (status.text = buttonText)),
    //    ]);
    };

    const checkIn = async (event)  => {
        try {
            let index = event.target.value;
            let student = roster.students[event.target.value];
            const studentId = student.student_id;
            let buttonText = checkinButton[event.target.value].text;

            const response = await axios.post(`${API_URL}/api/checkin_class/${studentId}/${activeClass.id}/${activeSessionId}/${buttonText}`);


            if (response.data.success)
                console.log("checked in");


            if (buttonText === 'Set None') {
                student.checkedIn = false;
                student.checkedOut = false;
            }
            else if (buttonText === 'Check-In') {
                student.checkedIn = true;
                student.checkedOut = false;
            }
            else {
                student.checkedIn = true;
                student.checkedOut = true;
            }
            updateCheckin(student, index);

           // window.location.reload(true);

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
                <br></br>
                <br></br>
                <br></br>
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
                            <css.TableHeader></css.TableHeader>
                        </css.TableRow>
                    </css.TableHead>
                <tbody>
                    {
                        roster.students.map((student, index) => (
                            <css.TableRow key={student.student_id}>
                                <css.TableCell>
                                    {student.student_name}
                                </css.TableCell>

                                <css.TableCell>
                                    <css.Text>{checkinStatus[index].text}</css.Text>
                                </css.TableCell>

                                <css.TableCell>
                                    <css.DarkButton type="button"
                                        value={index}
                                        onClick={() => {
                                            checkIn(event)
                                        }}
                                    >
                                        {checkinButton[index].text}
                                    </css.DarkButton>
                                </css.TableCell>

                            </css.TableRow>
                        ))
                    }
                    </tbody>
           </css.Table>
           <br></br>
           <br></br>
           <br></br>
         </p>
    );
}

export default ClassSessionList;
