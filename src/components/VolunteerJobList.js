import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

const API_URL = process.env.REACT_APP_BACKEND_URL;


function VolunteerJobList({
    volunteers, job
}) {
    const [search, setSearch] = useState('');

    const filteredUsers = volunteers.filter(user =>
        user.job.toLowerCase().includes(search.toLowerCase()));

    if (job.name != search)
        setSearch(job.name);

    return (
        <css.FormContainer>

            <css.Title>
                <css.Title>{job.name}</css.Title>
            </css.Title>

            {filteredUsers.length > 0 ?
                <p>
                <p><strong>Enrolled</strong> {job.enrolled} / {job.capacity}</p>

                <css.Table>
                    <css.TableHead>
                        <css.TableRow>
                            <css.TableHeader>Name</css.TableHeader>
                            <css.TableHeader>Availability</css.TableHeader>
                        </css.TableRow>
                    </css.TableHead>
                    <tbody>
                        {
                            filteredUsers.map((user) => (


                                <css.TableRow >
                                    <css.TableCell>
                                        <css.Text>{user.name}</css.Text>
                                    </css.TableCell>
                                    <css.TableCell>
                                        <css.Text>{user.startTime} - {user.endTime}</css.Text>
                                    </css.TableCell>
                                </css.TableRow>


                            ))}

                    </tbody>
                    </css.Table>
                </p>
                :
                <p>No volunteers found.</p>
            }
            <br></br>
            <br></br>
        </css.FormContainer>
    );
}

export default VolunteerJobList;
