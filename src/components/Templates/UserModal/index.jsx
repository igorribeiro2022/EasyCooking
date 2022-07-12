import {UserModalContainer} from './style';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from "../../../Providers/models/user/user";
import { useState } from 'react';

export const UserModal = ({state,setState}) => {

    const navigate = useNavigate();
    const { verifyToken, setIsOpen } = useContext(UserContext);
    const { logoutUser } = useContext(UserContext)

    const [ verify, setVerify ] = useState(verifyToken)

    function handleClick() {
        verify? navigate("/dashboard"):navigate("/login")
    }

    return (
        <UserModalContainer
        onMouseLeave={() => setIsOpen(false)}
        >

                {state ? 
                    <div className="UserModal">
                        <div className="UserModalContent">

                            <button onClick={() => {
                                navigate("/");
                                setIsOpen(false)
                            }}>Home</button>

                            <button onClick={() => {
                                handleClick();
                                setIsOpen(false)
                            }}>Dashboard</button>
                             
                            <button onClick={() => {
                                logoutUser(navigate)
                                setIsOpen(false)
                            }}>Logout</button>

                        </div>
                    </div>
                    :
                    <div></div>

                }

            

        </UserModalContainer>
    );
}
  