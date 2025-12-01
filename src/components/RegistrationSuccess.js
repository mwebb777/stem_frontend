import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;

function RegistrationSuccess() {
  const { id } = useParams();
  const [registration, setRegistration] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegistration = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/registrations/${id}`);
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
        <css.Message>{error || "Registration not found."}</css.Message>
        <css.LinkButton to="/">Return to Registration</css.LinkButton>
      </css.SuccessContainer>
    );
  }

  return (
    <css.SuccessContainer>
      <css.SuccessIcon>✓</css.SuccessIcon>
      <css.Title>Registration Complete!</css.Title>
      <css.Message>
        Thank you for registering for our STEM camp program. Please save your
        registration ID for future reference.
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
          <css.Title>Parent/Guardian Information</css.Title>
          <p>
            <strong>Name:</strong> {registration.parentInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {registration.parentInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {registration.parentInfo.phone}
          </p>
        </css.Section>

        <css.Section>
          <css.Title>Student Information</css.Title>
          <css.StudentList>
            {registration.students.map((student, index) => (
              <css.StudentItem key={index}>
                <h4>
                  {student.name} (Age {student.age})
                </h4>

                {student.allergies && (
                  <p>
                    <strong>Allergies:</strong> {student.allergies}
                  </p>
                )}

                {student.medicalNotes && (
                  <p>
                    <strong>Medical Notes:</strong> {student.medicalNotes}
                  </p>
                )}

                <p>
                  <strong>Classes:</strong>
                    {student.classNames.map((className, idx) => (
                        <css.ClassItem key={idx}>{className}</css.ClassItem>
                    ))}
                </p>
              </css.StudentItem>
            ))}
          </css.StudentList>
        </css.Section>
      </css.RegistrationDetails>

          <css.LinkButton to="/">Register Another Student</css.LinkButton>
    </css.SuccessContainer>
  );
}

export default RegistrationSuccess;
