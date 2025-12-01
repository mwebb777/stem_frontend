import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;

function RegistrationList() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/registrations`);
        setRegistrations(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load registrations:", err);
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  if (loading) {
    return <div>Loading registrations...</div>;
  }

  if (registrations.length === 0) {
    return (
      <css.ListContainer>
        <css.Title>Registrations</css.Title>
        <p>No registrations found.</p>
      </css.ListContainer>
    );
  }

  return (
    <css.ListContainer>
      <css.Title>All Registrations</css.Title>

      {registrations.map((registration) => (
        <css.RegistrationItem key={registration.id}>
          <css.RegistrationHeader>
            <css.RegistrationId>Registration ID: {registration.id}</css.RegistrationId>
            <css.RegistrationDate>
              {new Date(registration.timestamp).toLocaleString()}
            </css.RegistrationDate>
          </css.RegistrationHeader>

          <css.ParentInfo>
            <h3>Parent Information</h3>
            <p>
              <strong>Name:</strong> {registration.parentInfo.name}
            </p>
            <p>
              <strong>Email:</strong> {registration.parentInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {registration.parentInfo.phone}
            </p>
          </css.ParentInfo>

          <css.StudentsContainer>
            <h3>Students ({registration.students.length})</h3>

            {registration.students.map((student, index) => (
              <css.StudentCard key={index}>
                <css.StudentName>
                  {student.name} (Age {student.age})
                </css.StudentName>

                {student.allergies && (
                  <p>
                    <strong>Allergies:</strong> {student.allergies}
                  </p>
                )}

                <div>
                  <strong>Classes:</strong>
                  <css.ClassesList>
                    {student.classSelections.map((classId, idx) => (
                      <li key={idx}>Class ID: {classId}</li>
                    ))}
                  </css.ClassesList>
                </div>
              </css.StudentCard>
            ))}
          </css.StudentsContainer>
        </css.RegistrationItem>
      ))}
    </css.ListContainer>
  );
}

export default RegistrationList;
