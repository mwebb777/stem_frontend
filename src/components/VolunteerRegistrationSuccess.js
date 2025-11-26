import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const SuccessContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SuccessIcon = styled.div`
  color: #27ae60;
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const RegistrationDetails = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 6px;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  color: #34495e;
  margin-bottom: 0.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #ddd;
`;

const StudentList = styled.div`
  margin-top: 1rem;
`;

const StudentItem = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 4px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ClassList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0.5rem;
`;

const ClassItem = styled.li`
  padding: 0.25rem 0;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;

  &:hover {
    background: #2980b9;
  }
`;

function VolunteerRegistrationSuccess() {
    const { id } = useParams();
    const [registration, setRegistration] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRegistration = async () => {
            try {
                const response = await axios.get(`${API_URL}/volunteers/${id}`);
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
            <SuccessContainer>
                <Title>Error</Title>
                <Message>{error || "Volunteer Registration not found."}</Message>
                <Button to="/volunteer_registration">Return to Volunteer Registration</Button>
            </SuccessContainer>
        );
    }

    return (
        <SuccessContainer>
            <SuccessIcon>✓</SuccessIcon>
            <Title>Registration Complete!</Title>
            <Message>
                Thank you for registering to be a volunteer at the STEM event.
            </Message>

            <RegistrationDetails>
                <Section>
                    <SectionTitle>Registration Information</SectionTitle>
                    <p>
                        <strong>Registration ID:</strong> {registration.id}
                    </p>
                    <p>
                        <strong>Date:</strong>{" "}
                        {new Date(registration.timestamp).toLocaleDateString()}
                    </p>
                </Section>

                <Section>
                    <SectionTitle>Volunteer Information</SectionTitle>
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
                </Section>
            </RegistrationDetails>
        </SuccessContainer>
    );
}

export default VolunteerRegistrationSuccess;
