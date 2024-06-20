"use client"

import React, { useState } from 'react';
import { Box, Typography, Paper, Divider, Button, Grid, Select, MenuItem, IconButton, List, ListItem, ListItemAvatar, ListItemText, Avatar, SvgIcon } from '@mui/material';
import { MdDelete } from 'react-icons/md';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const initialItems: CartItem[] = [
  { id: 1, name: 'Apple Watch Series 7 - 44mm', description: 'Golden', price: 259, image: '/assets/images/avatars/1.png', quantity: 1 },
  { id: 2, name: 'Beylob 90 Speaker', description: 'Space Gray', price: 99, image: '/assets/images/avatars/2.png', quantity: 1 },
  { id: 3, name: 'Beoplay M5 Bluetooth Speaker', description: 'Silver Collection', price: 129, image: '/assets/images/avatars/3.png', quantity: 1 },
  { id: 4, name: 'Apple Watch Series 7 - 44mm', description: 'Golden', price: 379, image: '/assets/images/avatars/4.png', quantity: 1 },
];

const ShoppingCart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const handleQuantityChange = (id: number, quantity: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <Paper elevation={2}>
    <Box display="flex" justifyContent="space-between" padding={2}>
      <Box flex={3}>
        <Typography variant="h6">Your Cart</Typography>
        <List>
          {items.map(item => (
            <React.Fragment key={item.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={item.image} alt={item.name} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={item.description}
                />
                <Select
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  sx={{ width: 60 }}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <MenuItem key={num} value={num}>{num}</MenuItem>
                  ))}
                </Select>
                <Typography variant="body1" sx={{ marginLeft: 2 }}>
                  ${item.price.toFixed(2)}
                </Typography>
                <IconButton onClick={() => handleRemove(item.id)} edge="end">
                  <SvgIcon>
                  <MdDelete />
                  </SvgIcon>
                </IconButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box flex={1}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Summary</Typography>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography>Subtotal</Typography>
            <Typography>${subtotal.toFixed(2)}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={1}>
            <Typography>Tax</Typography>
            <Typography>$0</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={1}>
            <Typography>Shipping</Typography>
            <Typography>${shipping.toFixed(2)}</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box display="flex" justifyContent="space-between" fontWeight="fontWeightBold">
            <Typography>Total</Typography>
            <Typography>${total.toFixed(2)}</Typography>
          </Box>
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Confirm Payment
          </Button>
          <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
            Continue Shopping
          </Button>
        </Paper>
      </Box>
    </Box>
    </Paper>
  );
};

export default ShoppingCart;
