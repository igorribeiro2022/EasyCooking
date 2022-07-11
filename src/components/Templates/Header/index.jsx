import { HeaderContainer } from "./style";
import LogoWhite from "../../../assets/logoWhite-V2.svg";
import LogoBlack from "../../../assets/logoBlack-V2.svg";
import { UserModal } from "../../Templates/UserModal";
import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FormControlLabel, Switch } from "@mui/material";
import { ObjFormControl, ObjSwitch } from "../../../pages/login/style";
import { GlobalThemeContext } from "../../../Providers/models/theme/theme";



export const Header = () => {
  const { currentTheme, themeSwitch, getOpositeTheme } = useContext(GlobalThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const handleNavigate = () => navigate('/')

  return (
    <>
    <HeaderContainer>

            <img onClick={() => handleNavigate() } src={currentTheme === "dark"? LogoWhite : LogoBlack}  alt="" />

            <button onClick={() => setIsOpen(true)} className="UserButton"></button>
        
        <UserModal state={isOpen} setState={setIsOpen} />
        <FormControlLabel
        sx={ObjFormControl}
        value="end"
        control={<Switch
          sx={ObjSwitch}
          checked={themeSwitch}
          onChange={() => getOpositeTheme()}
          />}
          label="Tema"
          labelPlacement="start"
          />
    </HeaderContainer>
    <Outlet/>
    </>
  );
  
}

