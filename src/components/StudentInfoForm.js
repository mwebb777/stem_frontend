import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;


let activeStudent = "";

const setActiveStudent = (student) => {
    activeStudent = student;
};
function StudentInfoForm({
    student,
}) {

    const [checkinStatus, setCheckinStatus] = useState('None     ');
    const [checkinButton, setCheckinButton] = useState('Check-In');

    if (student === null || student === '') {
        return <div>No student selected</div>;
    }

    setActiveStudent(student);

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

    const checkIn = async(student) => {
        try {
            const response = await axios.post(`${API_URL}/api/checkin/${activeStudent.id}/${checkinButton}`);

            if (response.data.success)
                console.log("checked in");

            if (checkinButton === 'Set None') {
                activeStudent.checkedIn = false;
                activeStudent.checkedOut = false;
            }
            else if (checkinButton === 'Check-In') {
                activeStudent.checkedIn = true;
                activeStudent.checkedOut = false;
            }
            else {
                activeStudent.checkedIn = true;
                activeStudent.checkedOut = true;
            }
            updateCheckin(activeStudent);

        } catch (error) {
            console.error("Export failed:", error);
        }
    }


    return (
        <css.FormContainer>
            <css.Title>
                <css.Title>Student: {student.name}</css.Title>
            </css.Title>

            <css.FormRow>
                <css.Label>Status:</css.Label>
                <css.Text>{checkinStatus}</css.Text>
                <css.DarkButton type="button"
                    onClick={() => {
                        checkIn({ student })
                    }}
                >
                    {checkinButton}
                </css.DarkButton>

            </css.FormRow>

            <css.FormRow>
                <css.Label>Class 1: </css.Label>
                <css.Text>{student.classNames[0]}</css.Text>
            </css.FormRow>
            <css.FormRow>
                <css.Label>Class 2: </css.Label>
                <css.Text>{student.classNames[1]}</css.Text>
            </css.FormRow>
            <css.FormRow>
                <css.Label>Class 3: </css.Label>
                <css.Text>{student.classNames[2]}</css.Text>
            </css.FormRow>
            <css.FormRow>
                <css.Label>Food Allergies:</css.Label>
                <css.Text>{student.allergies}</css.Text>
            </css.FormRow>
            <css.FormRow>
                <css.Label>Medical Notes:</css.Label>
                <css.Text>{student.medicalNotes}</css.Text>
            </css.FormRow>
            <css.FormRow>
                <css.Label>Shirt Size:</css.Label>
                <css.Text>{student.shirt}</css.Text>
            </css.FormRow>
            <css.FormRow>
                <css.Label>School:</css.Label>
                <css.Text>{student.school}</css.Text>
            </css.FormRow>

            {window.userRole == 'Admin' &&
                <css.Section>
                    <css.FormRow>
                        <css.Label>Age: </css.Label>
                        <css.Text>{student.age}</css.Text>
                    </css.FormRow>
                    <css.FormRow>
                        <css.Label>Email:</css.Label>
                        <css.Text>{student.email}</css.Text>
                    </css.FormRow>
                    <css.FormRow>
                        <css.Label>Phone Number:</css.Label>
                        <css.Text>{student.phone}</css.Text>
                    </css.FormRow>

                    <css.FormRow>
                        <css.Label>Parent Name:</css.Label>
                        <css.Text>{student.parent.parentName}</css.Text>
                    </css.FormRow>

                    <css.FormRow>
                        <css.Label>Parent Phone:</css.Label>
                        <css.Text>{student.parent.parentPhone}</css.Text>
                    </css.FormRow>

                    <css.FormRow>
                        <css.Label>Alternate POC Name:</css.Label>
                        <css.Text>{student.parent.alternateName}</css.Text>
                    </css.FormRow>

                    <css.FormRow>
                        <css.Label>Alternate POC Phone:</css.Label>
                        <css.Text>{student.parent.alternatePhone}</css.Text>
                    </css.FormRow>
                </css.Section>
            }
        </css.FormContainer>
    );
}

export default StudentInfoForm;
