"use client"

import { FC } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Cart: FC = () => {
  const navigate = useRouter();
  return (
    <IconButton aria-label="cart" onClick={() => navigate.push("/cart")}>
      <StyledBadge badgeContent={4} >
        <AiOutlineShoppingCart size="20px" />
      </StyledBadge>
    </IconButton>
  );
};

export default Cart;
