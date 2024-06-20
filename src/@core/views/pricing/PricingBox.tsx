import { Box, Typography, Button, styled } from "@mui/material";

const PricingBoxContainer = styled('div')(({ theme }) => ({
  width: '100%',
  marginBottom: '1rem',
  '&:hover': {
    boxShadow: theme.shadows[1],
  },
}));

const Price = styled(Typography)(({ theme }) => ({
  marginBottom: '0.5rem',
  fontSize: '2rem',
  fontWeight: 'bold',
  color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
}));

const Time = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.text.secondary,
}));

const PackageName = styled(Typography)(({ theme }) => ({
  marginBottom: '0.5rem',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: '1rem',
  fontSize: '1rem',
  color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.text.secondary,
}));

const PricingBox = ({
  price,
  duration,
  packageName,
  subtitle,
  children
}: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  return (
    <PricingBoxContainer>
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          borderRadius: '0.25rem',
          backgroundColor: 'background.paper',
          padding: '2rem',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Price variant="h4">
            ${price} <Time variant="body1">/{duration}</Time>
          </Price>
          <PackageName variant="h5">{packageName}</PackageName>
        </Box>
        <Subtitle variant="body1" sx={{ marginBottom: '1rem' }}>{subtitle}</Subtitle>
        <Box sx={{ borderBottom: '1px solid', borderBottomColor: 'divider', paddingBottom: '1rem' }}>
          <Button variant="contained" sx={{ width: '100%' }} color="primary">
            Start Free Trial
          </Button>
        </Box>
        <Box>{children}</Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <svg
          width="179"
          height="158"
          viewBox="0 0 179 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG Paths */}
        </svg>
      </Box>
    </PricingBoxContainer>
  );
};

export default PricingBox;
