import { Typography, styled } from "@mui/material";

interface SectionTitleProps {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}

const SectionTitleContainer = styled('div')<{ mb: string }>(({
  theme,
  mb = "100px",
}) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: mb,
}));

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: SectionTitleProps) => {
  return (
    <SectionTitleContainer mb={mb}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 'bold',
          marginBottom: '1rem',
          fontSize: {
            xs: '1.5rem',
            sm: '1.875rem',
            md: '2.813rem',
          },
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: {
            xs: '1rem',
            md: '1.125rem',
          },
          color: 'text.secondary',
        }}
      >
        {paragraph}
      </Typography>
    </SectionTitleContainer>
  );
};

export default SectionTitle;
