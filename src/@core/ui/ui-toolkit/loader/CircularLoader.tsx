
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularLoader() {
  return (
    <Stack  sx={{position:"absolute",top:"50%",left:"50%"}}   >
      <CircularProgress color="secondary" />
    </Stack>
  );
}