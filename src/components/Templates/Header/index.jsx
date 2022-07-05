import { HeaderContainer } from "./style";
import EasyCooking from "../../../assets/Easy Cooking-black.png";

export const Header = () => {
  return (
    <HeaderContainer>
        <div className="Header">
            <img src={EasyCooking} alt="" />
            <button className="UserButton"></button>
        </div>
    </HeaderContainer>
  );
}

