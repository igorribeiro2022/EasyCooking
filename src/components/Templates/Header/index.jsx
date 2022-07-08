import { HeaderContainer } from "./style";
import EasyCooking from "../../../assets/Easy Cooking-black.png";
import { UserModal } from "../../Templates/UserModal";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
        <div className="Header">
            <img src={EasyCooking}  alt="" />
            <button onClick={() => setIsOpen(true)} className="UserButton"></button>
        </div>
        <UserModal state={isOpen} setState={setIsOpen} />
    </HeaderContainer>
  );
  
}

