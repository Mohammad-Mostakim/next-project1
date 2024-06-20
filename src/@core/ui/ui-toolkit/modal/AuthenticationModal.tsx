"use client"
import { useMemo, forwardRef, useEffect } from "react";
import { Dialog, IconButton, SvgIcon, Typography } from "@mui/material";

import { IoClose } from "react-icons/io5";

// hooks 
import { useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
// project import 
import Login from "@core/ui/modalComponent/Authentication/Login";
import ForgotPassword from "@core/ui/modalComponent/Authentication/ForgotPassword";
import Register from "@core/ui/modalComponent/Authentication/Register";
import { redirect, useRouter } from "next/navigation";

interface AuthenticationModalProps {
  handleModal: () => void;
  open: boolean;
  setOpen:any;
}

const AuthenticationModal = forwardRef<HTMLDivElement, AuthenticationModalProps>(
  function AuthenticationModal({ handleModal, open,setOpen }, ref) {
    const { authModalName, user } = useAppSelector(state => state.auth);
    const useModal: any = useMemo(() => authModalName, [authModalName]);
    const router = useRouter()


    useEffect(() => {
      if (user && user.role) {
        setOpen(false);
      }
    }, [user,setOpen])

    const renderAuthComponent = (modalType: string) => {
      switch (modalType) {
        case "login":
          return <Login />;
        case "register":
          return <Register />;
        case "forgotPassword":
          return <ForgotPassword />;
        default:
          return (
            <Typography variant="h2" color="error" align="center">
              Fix - Authentication Modal Name
            </Typography>
          );
      }
    };

    return (
      <Dialog
        ref={ref}
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleModal}
          sx={{
            position: "absolute",
            right: 2,
            top: 2,

          }}
        >
          <SvgIcon sx={{ color: "customBg.icon" }}>
            <IoClose />
          </SvgIcon>
        </IconButton>
        {renderAuthComponent(useModal)}
      </Dialog>
    );
  }
);


AuthenticationModal.displayName = "AuthenticationModal";

export default AuthenticationModal;
