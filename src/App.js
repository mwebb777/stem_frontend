import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationSuccess from "./components/RegistrationSuccess";
import VolunteerRegistrationSuccess from "./components/VolunteerRegistrationSuccess";
import RegistrationList from "./components/RegistrationList";
import AdminDashboard from "./components/AdminDashboard";
import VolunteerRegistrationForm from "./components/VolunteerRegistrationForm";

import RoleContextProvider from "./context/RoleContext";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
`;

function App() {
    return (
        <Router>
            <AppContainer>
                    <Header />
                    <MainContent>
                        <Routes>
                            <Route path="/" element={<RegistrationForm />} />
                            <Route path="/success/:id" element={<RegistrationSuccess />} />
                            <Route path="/volunteer_success/:id" element={<VolunteerRegistrationSuccess />} />
                            <Route path="/admin" element={<AdminDashboard />} />
                            <Route path="/registrations" element={<RegistrationList />} />
                            <Route path="/volunteer_registration" element={<VolunteerRegistrationForm/> }/>
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </MainContent>
                    <Footer />
            </AppContainer>
        </Router>
    );
}

export default App;
