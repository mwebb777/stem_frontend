import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;


function VolunteerRegistrationSuccess() {
    const { id } = useParams();
    const [registration, setRegistration] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRegistration = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/volunteers/${id}`);
                if (response.data.success) {
                    setRegistration(response.data.registration);
                } else {
                    setError("Failed to load registration details.");
                }
                setLoading(false);
            } catch (err) {
                setError("Failed to load registration details.");
                setLoading(false);
            }
        };

        if (id) {
            fetchRegistration();
        }
    }, [id]);

    if (loading) {
        return <div>Loading registration details...</div>;
    }

    if (error || !registration) {
        return (
            <css.SuccessContainer>
                <css.Title>Error</css.Title>
                <css.Message>{error || "Volunteer Registration not found."}</css.Message>
                <css.LinkButton to="/volunteer_registration">Return to Volunteer Registration</css.LinkButton>
            </css.SuccessContainer>
        );
    }

    return (
        <css.SuccessContainer>
            <css.SuccessIcon>✓</css.SuccessIcon>
            <css.Title>Registration Complete!</css.Title>
            <css.Message>
                Thank you for registering to be a volunteer at the STEM event.
            </css.Message>

            <css.RegistrationDetails>
                <css.Section>
                    <css.Title>Registration Information</css.Title>
                    <p>
                        <strong>Registration ID:</strong> {registration.id}
                    </p>
                    <p>
                        <strong>Date:</strong>{" "}
                        {new Date(registration.timestamp).toLocaleDateString()}
                    </p>
                </css.Section>

                <css.Section>
                    <css.Title>Volunteer Information</css.Title>
                    <p>
                        <strong>Name:</strong> {registration.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {registration.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {registration.phone}
                    </p>
                    <p>
                        <strong>Shirt Size:</strong> {registration.shirt}
                    </p>
                </css.Section>
            </css.RegistrationDetails>
        </css.SuccessContainer>
    );
}

export default VolunteerRegistrationSuccess;
