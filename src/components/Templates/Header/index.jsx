import { HeaderContainer } from "./style";
import EasyCooking from "../../../assets/Easy Cooking-black.png";
import { UserModal } from "../../Templates/UserModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const handleNavigate = () => navigate('/')

  return (
    <HeaderContainer>
        <div className="Header">
            <img onClick={() => handleNavigate() } src={EasyCooking}  alt="" />
            <button onClick={() => setIsOpen(true)} className="UserButton"></button>
        </div>
        <UserModal state={isOpen} setState={setIsOpen} />
    </HeaderContainer>
  );
  
}

