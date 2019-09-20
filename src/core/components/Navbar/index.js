import React from "react";

import { NavbarContainer, LogoContainer, LogoImage, MenuContainer, MenuItem } from "./styles";

const Navbar = () => (
 <NavbarContainer>
   <LogoContainer>
     <LogoImage src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/mision2700segunda.png" alt="mision 2700 2da edicion" />
     <LogoImage className="hand-eyes-logo" src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyes.png" alt="hand eyes" />
   </LogoContainer>
   <MenuContainer>
     <MenuItem>Quienes Somos</MenuItem>
     <MenuItem>Historias</MenuItem>
   </MenuContainer>
 </NavbarContainer>
);

export default Navbar;
