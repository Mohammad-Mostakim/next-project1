"use client";

import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { AlertTitle, Slide, SlideProps } from "@mui/material";
import { useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { SnackbarCloseReason } from "@mui/material";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarAuthRelatedAlert: React.FC = () => {
  const { feedback } = useAppSelector((state) => state.auth);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (feedback && feedback.tag) {
      setOpen(true);
    }
  }, [feedback]);

  const handleClose = (event: Event | React.SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => {
    if (reason !== "clickaway") {
      setOpen(false);
    }
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        TransitionComponent={SlideTransition}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={feedback?.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          <AlertTitle>{feedback?.tag}</AlertTitle>
          {feedback?.message || null}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackbarAuthRelatedAlert;
