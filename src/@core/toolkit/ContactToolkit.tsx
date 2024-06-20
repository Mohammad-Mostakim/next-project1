import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

// asserts 
import { MdEmail } from 'react-icons/md';
import { BsSkype, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { BiMessage } from 'react-icons/bi';


const actions = [
  { icon: <MdEmail />, name: 'Email' },
  { icon: <BsTelegram />, name: 'Telegram' },
  { icon: <BsSkype />, name: 'Skype' },
  { icon: <BsWhatsapp />, name: 'Whatsapp' },
];

export default function ContactToolkit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<BiMessage />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
