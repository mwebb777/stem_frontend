import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

import VolunteerInfoForm from "./VolunteerInfoForm";
import VolunteerJobList from "./VolunteerJobList";

const API_URL = process.env.REACT_APP_BACKEND_URL;


let activeVolunteer = "";

const setActiveVolunteer = (volunteer) => {
    activeVolunteer = volunteer;
};

function VolunteerDashboard() {
    const [activeTab, setActiveTab] = useState("list");
    const [volunteers, setVolunteers] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [volunteersRes, jobsRes] = await Promise.all([
                    axios.get(`${API_URL}/api/volunteers`),
                    axios.get(`${API_URL}/api/jobs`),
                ]);

                setVolunteers(volunteersRes.data);
                setJobs(jobsRes.data.jobs);
                setLoading(false);
            } catch (err) {
                console.error("Failed to load data:", err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredUsers = volunteers.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <div>Loading dashboard data...</div>;
    }

    if (activeVolunteer === '')
        setActiveVolunteer(volunteers[0]);

    return (
        <css.DashboardContainer>

            <css.TabsContainer>
                <css.Tab
                    active={activeTab === "list"}
                    onClick={() => setActiveTab("list")}
                >
                    List
                </css.Tab>
                <css.Tab
                    active={activeTab === "info"}
                    onClick={() => setActiveTab("info")}
                >
                    Info
                </css.Tab>
                <css.Tab
                    active={activeTab === "jobs"}
                    onClick={() => setActiveTab("jobs")}
                >
                    Positions
                </css.Tab>
            </css.TabsContainer>

            {activeTab === "list" && (
                <p>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ marginBottom: 10, padding: 8, width: '100%' }}
                    />

                 <css.Table>
                        <css.TableHead>
                        <css.TableRow>
                                <css.TableHeader>Name</css.TableHeader>
                                <css.TableHeader>Position</css.TableHeader>
                                <css.TableHeader>Availability</css.TableHeader>
                        </css.TableRow>
                    </css.TableHead>
                    <tbody>
                            {filteredUsers.map((vol) => (
                                <css.TableRow key={vol.id}>
                                    <css.TableCell>
                                        <css.Button type="button" onClick={() => {
                                        setActiveVolunteer(vol)
                                        setActiveTab("info")
                                        }
                                    }>
                                        {vol.name}
                                    </css.Button>
                                    </css.TableCell>
                                    <css.TableCell>
                                        <css.Text>{vol.job}</css.Text>
                                    </css.TableCell>
                                    <css.TableCell>
                                        <css.Text>{vol.startTime} - {vol.endTime}</css.Text>
                                    </css.TableCell>
                            </css.TableRow>
                        ))}
                    </tbody>
                    </css.Table>
                </p>
            )}

            {activeTab === "info" && (
                <p>
                    <VolunteerInfoForm
                        volunteer={activeVolunteer}
                    />
                </p>
            )}

            {activeTab === "jobs" && (
                <p>
                    {jobs.map((j) => ( 

                        <VolunteerJobList
                            volunteers={volunteers}
                            job={j}
                        />
                    
                    ))}

                </p>
            )}
        </css.DashboardContainer>
    );
}

export default VolunteerDashboard;
