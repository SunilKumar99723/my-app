import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import './menuItemsStyle.css';

  
const MenuContainer = () => {
  const [anchorEl, setAnchorEl] = React.useState('');
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  return (
    <div 
      style={{
        margin: 'left',
        width: '350px'
      }}
    >
      <h2>How to use Menu Component in ReactJS?</h2>
      <Button class="button button2" 
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Button class="button button3"> Menu 2</Button>

      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Gallery</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </Menu>
    </div>
  );
};
  
export default MenuContainer;