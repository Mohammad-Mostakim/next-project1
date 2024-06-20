"use client"
import AuthenticationModal from '@/@core/ui/ui-toolkit/modal/AuthenticationModal';
import { setAuthModalType } from '@/lib/Redux/AuthReduxtToolkit/AuthSlice';
import { useAppDispatch, useAppSelector } from '@/lib/Redux/ReduxStore/hooks';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

type LoginModalProps = {}

const LoginModal = ({ }: LoginModalProps) => {
    const dispatch = useAppDispatch();
    const modalRef = useRef(null);
    const { user } = useAppSelector(state => state.auth)
    const [open, setOpen] = useState<boolean>(true)
    const router = useRouter();
    const handleModal = () => {
        setOpen(!open);
        router.push("/");
    };
    useEffect(() => {
        if (user && user.role) {
            redirect("/dashboard")
        } else {
            dispatch(setAuthModalType({ authModalName: "login" }));
        }
    }, [dispatch, user])

    return (
        <AuthenticationModal open={open} setOpen={setOpen} handleModal={handleModal} ref={modalRef} />
    );
};

export default LoginModal;
