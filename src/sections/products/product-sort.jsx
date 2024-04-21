import { useState } from 'react';
import PropTypes from 'prop-types';

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { listClasses } from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  // { value: 'featured', label: 'Featured' },
  // { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];

export default function ShopProductSort({ onApplySort }) {
  const [open, setOpen] = useState(null);
  const [value, setValue] = useState('priceAsc');

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleSortOptionClick = (option) => {
    setValue(option.value); 
    onApplySort(option.value);
    setOpen(null); 
  };

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        onClick={handleOpen}
        endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
      >
        Sort By:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
        Price: Low-High
        </Typography>
      </Button>

      <Menu
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              [`& .${listClasses.root}`]: {
                p: 0,
              },
            },
          },
        }}
      >
        {SORT_OPTIONS.map((option) => (
          <MenuItem
           key={option.value}
           selected={value === option.value}
          //  onClick={handleClose}
          onClick={() => handleSortOptionClick(option)}
           >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}


ShopProductSort.propTypes = {
  onApplySort: PropTypes.func
};
