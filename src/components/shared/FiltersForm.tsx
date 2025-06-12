import { styled } from "@mui/material";
import React from "react";

const Form = styled("form")(({ theme }) => ({
  flexDirection: "column",
  display: "flex",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    gap: "2rem",
  },
  "& > :not(style)": {
    marginBottom: "3rem",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
    },
  },
}));

type FiltersFormProps = {
  children: React.ReactNode;
};

const FiltersForm: React.FC<FiltersFormProps> = ({ children }) => {
  return (
    <Form noValidate autoComplete="off">
      {children}
    </Form>
  );
};

export default FiltersForm;
