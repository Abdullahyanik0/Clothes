import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { CircularProgress } from "@mui/material";

export default function LinearIndeterminate() {
  return (
    <div className="flex justify-center  items-center ">
      <CircularProgress size={100} />
    </div>
  );
}
