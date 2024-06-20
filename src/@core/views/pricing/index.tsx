"use client";
import { useState } from "react";
import { Container, Typography, Grid, Switch, FormControlLabel, styled, Box } from "@mui/material";
import SectionTitle from "./SectonTitle";
import PricingBox from "./PricingBox";
import OfferList from "./OfferList";

const Section = styled('section')(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  padding: '4rem 0',
  [theme.breakpoints.up('md')]: {
    padding: '5rem 0',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '7rem 0',
  },
}));

const ToggleContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <Section id="pricing">
      <Container>
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <ToggleContainer>
          <Typography
            onClick={() => setIsMonthly(true)}
            sx={{
              mr: 4,
              cursor: 'pointer',
              fontWeight: 'bold',
              color: isMonthly ? 'primary.main' : 'text.primary',
              pointerEvents: isMonthly ? 'none' : 'auto'
            }}
          >
            Monthly
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={!isMonthly}
                onChange={() => setIsMonthly(!isMonthly)}
                color="primary"
              />
            }
            label={isMonthly ? 'Yearly' : 'Monthly'}
            sx={{ cursor: 'pointer' }}
          />
          <Typography
            onClick={() => setIsMonthly(false)}
            sx={{
              ml: 4,
              cursor: 'pointer',
              fontWeight: 'bold',
              color: !isMonthly ? 'primary.main' : 'text.primary',
              pointerEvents: !isMonthly ? 'none' : 'auto'
            }}
          >
            Yearly
          </Typography>
        </ToggleContainer>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <PricingBox
              packageName="Lite"
              price={isMonthly ? "40" : "120"}
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            >
              <OfferList text="All UI Components" status="active" />
              <OfferList text="Use with Unlimited Projects" status="active" />
              <OfferList text="Commercial Use" status="active" />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Lifetime Access" status="inactive" />
              <OfferList text="Free Lifetime Updates" status="inactive" />
            </PricingBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <PricingBox
              packageName="Basic"
              price={isMonthly ? "399" : "789"}
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            >
              <OfferList text="All UI Components" status="active" />
              <OfferList text="Use with Unlimited Projects" status="active" />
              <OfferList text="Commercial Use" status="active" />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Lifetime Access" status="active" />
              <OfferList text="Free Lifetime Updates" status="inactive" />
            </PricingBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <PricingBox
              packageName="Plus"
              price={isMonthly ? "589" : "999"}
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            >
              <OfferList text="All UI Components" status="active" />
              <OfferList text="Use with Unlimited Projects" status="active" />
              <OfferList text="Commercial Use" status="active" />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Lifetime Access" status="active" />
              <OfferList text="Free Lifetime Updates" status="active" />
            </PricingBox>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ position: 'absolute', bottom: 0, left: 0, zIndex: -1 }}>
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </Section>
  );
};

export default Pricing;
