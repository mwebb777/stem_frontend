import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;


function VolunteerRegistrationForm() {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedShirt, setSelectedShirt] = useState("");
    const [isWaiver1Checked, setWaiver1Checked] = useState(false);
    const [isWaiver2Checked, setWaiver2Checked] = useState(false);
    const [isWaiver3Checked, setWaiver3Checked] = useState(false);
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
            !volunteerInfo.password || !volunteerInfo.shirt || 
            !isWaiver1Checked || !isWaiver2Checked || !isWaiver3Checked) {
            return false;
        }
        return true;
    };

    const shirtSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

    if (loading) {
        return <div>Loading volunteer information...</div>;
    }

    return (
        <css.FormContainer>
            <css.FormTitle>STEM 2026 Volunteer Registration</css.FormTitle>

            {error && <css.ErrorMessage>{error}</css.ErrorMessage>}

            <form onSubmit={handleSubmit}>
                <css.Section>
                    <css.Title>Volunteer Information</css.Title>
                    <css.FormField>
                        <css.Label htmlFor="volunteerName">Full Name</css.Label>
                        <css.Input
                            id="volunteerName"
                            name="name"
                            value={volunteerInfo.name}
                            onChange={handleInfoChange}
                            required
                        />
                    </css.FormField>
                    <css.FormField>
                        <css.Label htmlFor="volunteerEmail">Email</css.Label>
                        <css.Input
                            id="volunteerEmail"
                            name="email"
                            type="email"
                            value={volunteerInfo.email}
                            onChange={handleInfoChange}
                            required
                        />
                    </css.FormField>

                    <css.FormField>
                        <css.Label htmlFor="password">Password</css.Label>
                        <css.Input
                            id="password"
                            name="password"
                            value={volunteerInfo.password}
                            onChange={handleInfoChange}
                            required
                        />
                    </css.FormField>

                    <css.FormField>
                        <css.Label htmlFor="volunteerPhone">Phone Number</css.Label>
                        <css.Input
                            id="volunteerPhone"
                            name="phone"
                            type="tel"
                            value={volunteerInfo.phone}
                            onChange={handleInfoChange}
                            required
                        />
                    </css.FormField>
                </css.Section>

                <css.FormField>
                    <css.Label htmlFor="volunteerShirt">Shirt Size</css.Label>
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
                    <br>
                    </br>
                    <br></br>
                </css.FormField>


                <css.Section>
                    <css.Title>Waiver 1</css.Title>
                    <css.ListContainer>
                        <p>
                            This is waiver one.
                        </p>
                    </css.ListContainer>
                </css.Section>

                <css.Label> Accept Waiver 1: {'  '}
                    <css.Input
                        type="checkbox"
                        checked={isWaiver1Checked}
                        onChange={(e) => setWaiver1Checked(e.target.checked)}
                    />
                </css.Label>

                <css.Section>
                    <css.Title>Waiver 2</css.Title>
                    <css.ListContainer>
                        <p>
                            This is waiver two.
                        </p>
                    </css.ListContainer>
                </css.Section>

                <css.Label> Accept Waiver 2: {'  '}
                    <css.Input
                        type="checkbox"
                        checked={isWaiver2Checked}
                        onChange={(e) => setWaiver2Checked(e.target.checked)}
                    />
                </css.Label>

                <css.Section>
                    <css.Title>Waiver 3</css.Title>
                    <css.ListContainer>
                        <p>
                            This is waiver three.
                        </p>
                    </css.ListContainer>
                </css.Section>

                <css.Label> Accept Waiver 3: {'  '}
                    <css.Input
                        type="checkbox"
                        checked={isWaiver3Checked}
                        onChange={(e) => setWaiver3Checked(e.target.checked)}
                    />
                </css.Label>



                <css.SubmitButton type="submit" disabled={!isFormValid()} primary>
                    Complete Registration
                </css.SubmitButton>
            </form>
        </css.FormContainer>
    );
}

export default VolunteerRegistrationForm;
