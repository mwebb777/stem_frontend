import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default {

    DashboardContainer: styled.div`
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    `,

    ListContainer: styled.div`
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    `,

    StatsContainer: styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    `,

    FormContainer: styled.div`
      background: #f8f9fa;
      border-radius: 6px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      border-left: 4px solid #3498db;
    `,

    Header: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    `,

    Title: styled.h3`
      color: #2c3e50;
      margin: 0;
    `,

    TabsContainer: styled.div`
      display: flex;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid #ddd;
    `,


    Tab: styled.button`
      padding: 0.75rem 1.5rem;
      background: ${(props) => (props.active ? "#3498db" : "transparent")};
      color: ${(props) => (props.active ? "white" : "#34495e")};
      border: none;
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        background: ${(props) => (props.active ? "#3498db" : "#f1f2f6")};
      }
    `,

    ProgressContainer: styled.div`
      background: #ecf0f1;
      border-radius: 10px;
      height: 10px;
      overflow: hidden;
      margin: 0.5rem 0;
    `,

    ProgressBar: styled.div`
      height: 100%;
      background: ${(props) => {
                percentage = (props.value / props.max) * 100;
                if (percentage < 60) return "#2ecc71";
                if (percentage < 80) return "#f39c12";
                return "#e74c3c";
            }};
      width: ${(props) => (props.value / props.max) * 100}%;
    `,


    Table: styled.table`
      width: 100%;
      border-collapse: collapse;
    `,

    TableHead: styled.thead`
      background: #f1f2f6;
    `,

    TableRow: styled.tr`
      border-bottom: 1px solid #ddd;

      &:hover {
        background: #f8f9fa;
      }
    `,

    TableHeader: styled.th`
      text-align: left;
      padding: 0.75rem;
    `,

    TableCell: styled.td`
      padding: 0.75rem;
    `,


    RemoveButton: styled.button`
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
      cursor: pointer;

      &:hover {
        background: #c0392b;
      }

      &:disabled {
        background: #bdc3c7;
        cursor: not-allowed;
      }
    `,

    FormRow: styled.div`
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
      }
    `,


    FormField: styled.div`
      flex: 1;
    `,

    Label: styled.th`
      text-align: left;
      padding: 0.75rem;
    `,

    Text: styled.td`
      padding: 0.75rem;
    `,

    Input: styled.input`
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
    `,

    TextArea: styled.textarea`
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      min-height: 80px;
      resize: vertical;

      &:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
      }
    `,

    ClassesSection: styled.div`
      margin-top: 1.5rem;
    `,

    ClassesList: styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 0.5rem;
    `,

    ClassCard: styled.div`
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 1rem;
      background: ${(props) =>
                props.selected ? "rgba(52, 152, 219, 0.1)" : "white"};
      border-color: ${(props) => (props.selected ? "#3498db" : "#ddd")};
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        border-color: #3498db;
      }

      ${(props) =>
                props.disabled &&
                `
        opacity: 0.6;
        cursor: not-allowed;
        background: #f1f2f6;
      `}
    `,

    ClassName: styled.h4`
      margin: 0 0 0.5rem;
      color: #2c3e50;
    `,

    ClassDescription: styled.p`
      margin: 0;
      font-size: 0.875rem;
      color: #7f8c8d;
    `,

    AvailabilityInfo: styled.div`
      font-size: 0.75rem;
      margin-top: 0.5rem;
      color: ${(props) => (props.available ? "#27ae60" : "#e74c3c")};
    `,

    SelectionCount: styled.div`
      font-size: 0.9rem;
      margin-top: 0.5rem;
      color: ${(props) =>
                props.complete ? "#27ae60" : props.tooMany ? "#e74c3c" : "#7f8c8d"};
    `,

    Button: styled.button`
      padding: 0.75rem 1.5rem;
      background: white;
      color: black;
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
    `,

}