import React, { useState } from 'react';


const NavItem = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a href='#' onClick={() => setOpen(!open)}>
      lalalala
      </a>
      { open && children}
    </div>
  )

}

export default NavItem;