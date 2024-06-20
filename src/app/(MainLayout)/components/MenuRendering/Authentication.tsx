import { authenticationCheckAsync } from '@/lib/Redux/AuthReduxtToolkit/AuthSlice';
import { useAppDispatch, useAppSelector } from '@/lib/Redux/ReduxStore/hooks';
import { UseGetUserInfo } from '@/lib/Redux/UserDataQuary/UserDataSlice';
import React from 'react';

type AuthenticationProps = {
    children?: React.ReactNode;
}

export const Authentication = ({ children }: AuthenticationProps) => {
    const { user } = useAppSelector(state => state.auth);
    const {userInfo}=useAppSelector(state=>state.userData);
    const dispatch = useAppDispatch();

    // authenticaiton check 
    const checkAuthentication = React.useCallback((): void => {
        if (!user) dispatch(authenticationCheckAsync())
        if(user && !userInfo){
              dispatch(UseGetUserInfo())
        }
    }, [dispatch, user,userInfo])


    React.useEffect(() => {
        checkAuthentication()
    }, [checkAuthentication])

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
};