import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import css from "../styles.js"

import { ThemeProvider, ThemeContext } from "../context/RoleContext";

const API_URL = process.env.REACT_APP_BACKEND_URL;

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');

        window.userRole = 'admin';

        try {
            setError(null);
            const response = await axios.post(`${API_URL}/api/login`, {
                email,
                password,
            });

            setMessage(response.data.message)
            if (response.data.success) {
                navigate('/admin');
            }
        } catch (err) {
            setError(
                err.response?.data?.message || "Registration failed. Please try again.",
            );
            setMessage(err.response?.data?.message);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Login</button>
            </form>
            <br></br>
            <br></br>
            <p>{message}</p>
        </div>
    );
}

const styles = {
    container: { maxWidth: '300px', margin: 'auto', textAlign: 'center', padding: '20px' },
    form: { display: 'flex', flexDirection: 'column', gap: '10px' },
    input: { padding: '10px', fontSize: '14px' },
    button: { padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }
};
