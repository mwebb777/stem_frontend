import React from "react";
import styled from "styled-components";
import css from "../styles.js"

function Footer() {
  return (
      <css.FooterContainer>
      <css.FooterContent>
        <p>
          &copy; 2026 SOMD STEM Registration. All rights reserved.
        </p>
      </css.FooterContent>
    </css.FooterContainer>
  );
}

export default Footer;
