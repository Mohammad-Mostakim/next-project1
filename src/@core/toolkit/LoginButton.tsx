"use client";

import React, { useState, Fragment, useRef } from 'react';
import Button from '@mui/material/Button';
import { useAppDispatch } from '@/lib/Redux/ReduxStore/hooks';
import { setAuthModalType } from '@/lib/Redux/AuthReduxtToolkit/AuthSlice';
import AuthenticationModal from '../ui/ui-toolkit/modal/AuthenticationModal';

const LoginButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const modalRef = useRef(null);

  const handleModal = () => {
    dispatch(setAuthModalType({ authModalName: "login" }));
    setOpen(!open);
  };

  return (
    <Fragment>
      <Button variant="contained" color="primary" onClick={handleModal}>
        Login
      </Button>
      <AuthenticationModal setOpen={setOpen} open={open} handleModal={handleModal} ref={modalRef}/>
    </Fragment>
  );
};

export default LoginButton;
