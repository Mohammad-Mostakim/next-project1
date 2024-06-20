/** @format */
import { useAppSelector } from "@/lib/Redux/ReduxStore/hooks";
import { Grid, Paper, Typography } from "@mui/material";
import { useMemo } from "react";

export default function AccountInfoOverView() {
  const { userInfo } = useAppSelector((state) => state?.userData);
  const user_data = userInfo;
  const User = useMemo(() => {
    if (!user_data) return [];
    return Object.entries(user_data).filter(([key]) => key !== "photo");
  }, [user_data]);

  return (
    <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <Typography variant="h2" gutterBottom>
            {user_data?.fname} {user_data?.lname}
          </Typography>
          <Grid container spacing={2}>
            {User.map(([key, value]) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <Typography variant="h3" gutterBottom>
                  {key.toUpperCase()}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
