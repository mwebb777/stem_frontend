import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #34495e;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ecf0f1;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const StudentsContainer = styled.div`
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${(props) => (props.primary ? "#3498db" : "#ecf0f1")};
  color: ${(props) => (props.primary ? "white" : "#34495e")};
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

const SubmitButton = styled(Button)`
  background: #27ae60;

  &:hover {
    background: #2ecc71;
  }

  &:disabled {
    background: #bdc3c7;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  padding: 0.75rem;
  background: #fadbd8;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

function VolunteerRegistrationForm() {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedShirt, setSelectedShirt] = useState("");
    const navigate = useNavigate();

    const [volunteerInfo, setVolunteerInfo] = useState({
        name: "",
        password: "",
        email: "",
        phone: "",
        shirt: "",
    });

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/classes`);
                setClasses(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to load available classes. Please try again later.");
                setLoading(false);
            }
        };

        fetchClasses();
    }, []);

    const handleInfoChange = (e) => {
        const { name, value } = e.target;
        setVolunteerInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(null);
            const response = await axios.post(`${API_URL}/api/volunteer`, {
                volunteerInfo
            });

            if (response.data.success) {
                navigate(`/volunteer_success/${response.data.registrationId}`);
            }
        } catch (err) {
            setError(
                err.response?.data?.message || "Registration failed. Please try again.",
            );
        }
    };

    const isFormValid = () => {
        if (!volunteerInfo.name || !volunteerInfo.email || !volunteerInfo.phone ||
            !volunteerInfo.password || !volunteerInfo.shirt) {
            return false;
        }
        return true;
    };

    const shirtSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

    if (loading) {
        return <div>Loading volunteer information...</div>;
    }

    return (
        <FormContainer>
            <FormTitle>STEM 2026 Volunteer Registration</FormTitle>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <form onSubmit={handleSubmit}>
                <Section>
                    <SectionTitle>Volunteer Information</SectionTitle>
                    <FormField>
                        <Label htmlFor="volunteerName">Full Name</Label>
                        <Input
                            id="volunteerName"
                            name="name"
                            value={volunteerInfo.name}
                            onChange={handleInfoChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="volunteerEmail">Email</Label>
                        <Input
                            id="volunteerEmail"
                            name="email"
                            type="email"
                            value={volunteerInfo.email}
                            onChange={handleInfoChange}
                            required
                        />
                    </FormField>

                    <FormField>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            value={volunteerInfo.password}
                            onChange={handleInfoChange}
                            required
                        />
                    </FormField>

                    <FormField>
                        <Label htmlFor="volunteerPhone">Phone Number</Label>
                        <Input
                            id="volunteerPhone"
                            name="phone"
                            type="tel"
                            value={volunteerInfo.phone}
                            onChange={handleInfoChange}
                            required
                        />
                    </FormField>
                </Section>

                <FormField>
                    <Label htmlFor="volunteerShirt">Shirt Size</Label>
                    {
                        <select
                            name="shirt"
                            value={volunteerInfo.shirt}
                            onChange={handleInfoChange}
                        >
                            <option value="">-- Choose a shirt size --</option>
                            {shirtSizes.map((sh, idx) => (
                                <option key={idx} value={sh}>
                                    {sh}
                                </option>
                            ))}
                        </select>
                    }
                </FormField>

                <SubmitButton type="submit" disabled={!isFormValid()} primary>
                    Complete Registration
                </SubmitButton>
            </form>
        </FormContainer>
    );
}

export default VolunteerRegistrationForm;
