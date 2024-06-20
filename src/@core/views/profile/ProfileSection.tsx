"use client"

// IMPORTS
import React, { useState, useMemo, useRef } from "react";
import { Box, Grid, IconButton, Paper, Stack, SvgIcon, Tooltip, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
// icons 
import { BiCloudUpload, BiEdit } from "react-icons/bi";
import { GiPhotoCamera } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
// hooks 
import { useAppDispatch, useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { uploadUserPhotoAsync } from "@/lib/Redux/UserDataQuary/UserDataSlice";
import FormModal from "@/@core/ui/ui-toolkit/modal/FormModal";
// STYLES
const styles: Record<string, React.CSSProperties> = {
    details: {
        padding: "1rem",
        textAlign: "center",
    },
    icon: {
        cursor: "pointer",
        border: "2px solid white",
        borderRadius: "50%",
        padding: "0.2rem",
        width: 30,
        height: 30,
    },
};

//APP
export default function ProfileSection() {
    const { userInfo } = useAppSelector((state) => state.userData);
    const User = useMemo(() => userInfo, [userInfo]);
    const fullName = `${User?.fname} ${User?.lname}`;
    const dispatch = useAppDispatch();
    const [isEdit, setIsEdit] = useState(false);

    const userDetails = useMemo(
        () => ({
            email: User?.email,
            fname: User?.fname,
            lname: User?.lname, 
            userName: User?.userName,
            occupation: User?.occupation,
            workPlace: User?.workPlace,
            status: User?.status,
            bio: User?.bio,
            birthday: User?.birthday ? new Date(User.birthday) : new Date(),
            contractNumber: User?.contractNumber,
            website: User?.website,
            country: User?.country,
            languages: User?.languages ? User?.languages : [],
            gender: User?.gender,
        }),
        [User]
    );
    // work for user profile
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [img, setImg] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleCameraIconClick = () => {
        // Trigger the file input click
        fileInputRef.current?.click();
    };

    const photoChange = (file: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const { files } = file.target;
        if (files && files.length !== 0) {
            setImg(files[0]);
            reader.onload = () => setImgSrc(reader.result as string);
            reader.readAsDataURL(files[0]);
        }
    };

    const uploadPhoto = () => {
        if (img) {
            dispatch(uploadUserPhotoAsync(img));
            setImgSrc(null);
        }
    };

    return (
        <Paper
            sx={{
                height: "80vh",
                boxShadow: theme => theme.shadows[2],
            }}
        >
            <Grid container direction="column">
                {/* CARD HEADER START */}
                <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
                    {/* PROFILE PHOTO */}
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        badgeContent={
                            <>
                                {!imgSrc && (
                                    <SvgIcon onClick={handleCameraIconClick}
                                        style={styles.icon}>
                                        <GiPhotoCamera
                                        />
                                    </SvgIcon>
                                )}
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={photoChange}
                                />
                            </>
                        }
                    >
                        <Avatar
                            sx={{ width: 100, height: 100, mb: 1.5 }}
                            src={imgSrc ? imgSrc : User?.photo}
                        />
                    </Badge>
                    {imgSrc && (
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-evenly"
                            spacing={5}
                        >
                            <IconButton
                                aria-label="save"
                                onClick={uploadPhoto}
                                size="large"
                                color="success"
                            >
                                <SvgIcon style={styles.icon}>
                                    <BiCloudUpload />
                                </SvgIcon>
                            </IconButton>
                            <IconButton
                                aria-label="cancel"
                                color="error"
                                onClick={() => setImgSrc(null)}
                                size="large"
                            >
                                <SvgIcon style={styles.icon}>
                                    <MdCancel />
                                </SvgIcon>
                            </IconButton>
                        </Stack>
                    )}
                    {/* DESCRIPTION */}
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                        <Typography variant="h2" component="h3">
                            {fullName}
                        </Typography>
                        <IconButton title="Edit Info" onClick={() => setIsEdit(true)} disableRipple>
                            <SvgIcon>
                                <BiEdit />
                            </SvgIcon>
                        </IconButton>
                    </Box>
                    {/* <Tooltip title="Edit Info" sx={{ float: "right", width: "3px" }}>
                        
                    </Tooltip> */}
                    <Typography color="text.secondary">{User?.occupation}</Typography>
                </Grid>
                {/* CARD HEADER END */}
                {/* DETAILS */}
                <Grid container>
                    <Grid item xs={12}>
                        <Typography style={styles.details}>{User?.bio}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <ProfileFacality /> */}
                    </Grid>
                </Grid>
                {/* modle  */}
                <FormModal
                    openModle={isEdit}
                    initialValues={userDetails}
                    setOpenModle={setIsEdit}
                    modleName={"userInfoChange"}
                />
            </Grid>
        </Paper>
    );
}
