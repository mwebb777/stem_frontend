import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;

function VolunteerRegistrationForm() {
    const [jobs, setJobs] = useState([]);
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
        allergies: "",
        medicalNotes: "",
        phone: "",
        shirt: "",
        job: "none",
        startTime: "08:00",
        endTime: "17:00",
    });

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/jobs`);

                setJobs(response.data.jobs);
                setLoading(false);
            } catch (err) {
                setError("Failed to load available positions. Please try again later.");
                setLoading(false);
            }
        };

        fetchJobs();
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
                navigate(`/volunteer_success/${response.data.id}`);
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
            !isWaiver1Checked || !isWaiver2Checked || !isWaiver3Checked || (volunteerInfo.job == 'none')) {
            return false;
        }
        return true;
    };

    const toggleJobSelection = (jobName) => {
        const currentSelection = volunteerInfo.job;

        // If already selected, remove it
        if (currentSelection == jobName) {
            currentSelection = '';
            setVolunteerInfo((prev) => ({
                ...prev,
                job: currentSelection,
            }));
            return;
        }
        else {
            setVolunteerInfo((prev) => ({
                ...prev,
                job: jobName,
            }));
            return;
        }
        return;
    };

    const isJobSelected = (jobName) => {
        return volunteerInfo.job == jobName;
    };

    const isJobDisabled = (job) => {
        // If already selected, never disabled
        if (isJobSelected(job.name)) return false;

        // If at max selections, disable unselected classes
        //if (student.class1.length >= 1) return true;

        // If job is full, disable it
        return job.available <= 0;
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

                    <css.FormField>
                        <css.Label csscsshtmlFor="startTime">Start Time</css.Label>
                        <css.Input
                            type="time"
                            id="startTime"
                            name="startTime"
                            value={volunteerInfo.startTime}
                            onChange={handleInfoChange}
                            required
                        />
                        <css.Label csshtmlFor="endTime">End Time</css.Label>
                        <css.Input
                            type="time"
                            id="endTime"
                            name="endTime"
                            value={volunteerInfo.endTime}
                            onChange={handleInfoChange}
                            required
                            />

                    </css.FormField>

                    <css.FormField>
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

                <css.FormField>
                    <css.Label htmlFor={`allergies-${volunteerInfo.id}`}>Food Allergies</css.Label>
                    <css.Input
                        id={`allergies-${volunteerInfo.id}`}
                        name="allergies"
                        placeholder="List any food allergies, or type 'None'"
                        value={volunteerInfo.allergies}
                        onChange={handleInfoChange}
                        required
                    />
                </css.FormField>

                <css.FormField>
                    <css.Label htmlFor={`medicalNotes-${volunteerInfo.id}`}>Medical Notes</css.Label>
                    <css.TextArea
                        id={`medicalNotes-${volunteerInfo.id}`}
                        name="medicalNotes"
                        placeholder="Any additional medical information we should know"
                        value={volunteerInfo.medicalNotes}
                        onChange={handleInfoChange}
                    />
                </css.FormField>

                <css.ClassesSection>
                    <css.Label>Volunteer Position</css.Label>
                    <css.ClassesList>
                        {jobs.map((job) => (
                            <css.ClassCard
                                key={job.id}
                                selected={isJobSelected(job.name)}
                                disabled={isJobDisabled(job)}
                                onClick={() =>
                                    !isJobDisabled(job) && toggleJobSelection(job.name)
                                }
                            >
                                <css.ClassName>{job.name}</css.ClassName>
                                <css.ClassDescription>{job.description}</css.ClassDescription>
                                <css.AvailabilityInfo available={job.available > 0}>
                                    {job.available > 0
                                        ? `${job.available} spots available`
                                        : "Class full"}
                                </css.AvailabilityInfo>
                            </css.ClassCard>
                        ))}
                    </css.ClassesList>
                </css.ClassesSection>


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
