import React from "react";
import { CircularProgress } from "@mui/material";

export default function LinearIndeterminate() {
  return (
    <div className="flex justify-center  h-screen ">
      <CircularProgress size={100} />
    </div>
  );
}
