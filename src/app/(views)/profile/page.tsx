// IMPORTS
import Grid from "@mui/material/Grid";
import OverViewSection from "@/@core/views/profile/OverviewsSection";
import ProfileSection from "@/@core/views/profile/ProfileSection";

// APP
export default function AccountDataPage() {
  return (
    <Grid
      container
      spacing={2}
      padding={2}
    //   height="100vh"
      width="100%"
      direction={{ sm: "row" }}
    >
      {/* PROFILE CARD */}
      <Grid item xs={12} sm={12} md={3} >
        <ProfileSection />
      </Grid>

      {/* SETTINGS CARD */}
      <Grid item xs={12} md={9}>
        <OverViewSection/>
      </Grid>
    </Grid>
  );
}
