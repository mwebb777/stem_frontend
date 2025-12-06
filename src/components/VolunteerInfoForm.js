import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;



let activeVolunteer = "";

const setActiveVolunteer = (volunteer) => {
    activeVolunteer = volunteer;
};

function VolunteerInfoForm({
    volunteer,
}) {
    const [checkinStatus, setCheckinStatus] = useState('None     ');
    const [checkinButton, setCheckinButton] = useState('Check-In');
    const [loading, setLoading] = useState(true);


    const updateCheckin = (volunteer) => {

        if (volunteer.checkedIn && volunteer.checkedOut) {
            setCheckinStatus('Checked-Out');
            setCheckinButton('Set None');
        }
        else if (volunteer.checkedIn && !volunteer.checkedOut) {
            setCheckinStatus('Checked-In ');
            setCheckinButton('Check-Out');
        }
        else {
            setCheckinStatus('None       ');
            setCheckinButton('Check-In');
        }
    };

    const checkIn = async (volunteer) => {
        try {
            const response = await axios.post(`${API_URL}/api/checkin_volunteer/${activeVolunteer.id}/${checkinButton}`);

            if (response.data.success)
                console.log("checked in");

            if (checkinButton === 'Set None') {
                activeVolunteer.checkedIn = false;
                activeVolunteer.checkedOut = false;
            }
            else if (checkinButton === 'Check-In') {
                activeVolunteer.checkedIn = true;
                activeVolunteer.checkedOut = false;
            }
            else {
                activeVolunteer.checkedIn = true;
                activeVolunteer.checkedOut = true;
            }
            updateCheckin(activeVolunteer);

        } catch (error) {
            console.error("Export failed:", error);
        }
    }

    setActiveVolunteer(volunteer);

    if (loading) {
        updateCheckin(volunteer);
        setLoading(false);
    }

    return (
        <css.FormContainer>
            <css.Title>
                <css.Title>Volunteer: {volunteer.name}</css.Title>
            </css.Title>

            <css.FormRow>

                <css.Label>Status:</css.Label>
                <css.Text>{checkinStatus}</css.Text>
                <css.DarkButton type="button"
                    onClick={() => {
                        checkIn({ volunteer })
                    }}
                >
                    {checkinButton}
                </css.DarkButton>
            </css.FormRow>

             <css.FormRow>
                <css.Label>Food Allergies:</css.Label>
                <css.Text>{volunteer.allergies}</css.Text>
            </css.FormRow>

            <css.FormRow>
                <css.Label>Medical Notes:</css.Label>
                <css.Text>{volunteer.medicalNotes}</css.Text>
            </css.FormRow>

            {window.userRole == 'Admin' &&
                <css.Section>
                    <css.FormRow>
                        <css.Label>Email:</css.Label>
                        <css.Text>{volunteer.email}</css.Text>
                    </css.FormRow>
                    <css.FormRow>
                        <css.Label>Phone Number:</css.Label>
                        <css.Text>{volunteer.phone}</css.Text>
                    </css.FormRow>
                    <css.FormRow>
                        <css.Label>Shirt Size:</css.Label>
                        <css.Text>{volunteer.shirt}</css.Text>
                    </css.FormRow>
                </css.Section>
            }

        </css.FormContainer>
    );
}

export default VolunteerInfoForm;
