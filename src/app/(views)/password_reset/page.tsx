"use client"
import LoginModal from "@/@core/toolkit/LoginModal";
import FormModal from "@/@core/ui/ui-toolkit/modal/FormModal";
import { setAuthModalType } from "@/lib/Redux/AuthReduxtToolkit/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
interface Feedback {
  success: boolean;
  message: string;
}

const PasswordResetPage = () => {
  const { feedback } = useAppSelector((state: any) => state.auth);
  const [passwordResetModle, setPasswordResetModle] = useState<boolean>(true);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(7); // Initial countdown value
  const dispatch = useAppDispatch();
  const urlParams = useSearchParams();
  // Parse query parameters from the URL
  const token = urlParams.getAll('token')[0];
  const email = urlParams.getAll('email')[0];

  useEffect(() => {
    if (feedback && feedback?.success === true) {
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1); // Decrement countdown
      }, 1000); // Update countdown every second

      // Clear interval after 7 seconds
      setTimeout(() => {
        clearInterval(countdownInterval);
        setOpenLoginModal(true)
      }, 7000); // Dispatch after 7 seconds

      // Cleanup function
      return () => clearInterval(countdownInterval);
    }
  }, [feedback, dispatch]);

  const msg: string = feedback && feedback?.tag === "password_reset" ? (feedback?.success === false
    ? feedback?.message
    : `${feedback?.message} - Wait ${countdown}s for login form`) : undefined;

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
    token: token,
    email: email,
  };
  if (openLoginModal) {
    return (
      <LoginModal />
    )
  }
  return (
    <React.Fragment>
      <FormModal
        openModle={passwordResetModle}
        setOpenModle={setPasswordResetModle}
        modleName={"password-Reset"}
        initialValues={initialValues}
        message={msg ? msg : ""}
      />
    </React.Fragment>
  );
};

export default PasswordResetPage;
