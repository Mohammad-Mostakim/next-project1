import { Box } from '@mui/material';
import BoxCard from "@core/ui/ui-toolkit/cards/BoxCard"
// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

interface AuthCardWrapperProps {
    children?: React.ReactNode;
    [key: string]: any;
}

const AuthCardWrapper: React.FC<AuthCardWrapperProps> = ({ children, ...other }) => (
    <BoxCard
        sx={{
            maxWidth: { xs: 400, lg: 475 },
            // margin: { xs: 2.5, md: 3 },
            '& > *': {
                // flexGrow: 1,
                flexBasis: '50%'
            }
        }}
        content={false}
        {...other}
    >
        <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
    </BoxCard>
);

export default AuthCardWrapper;
