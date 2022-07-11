import {UserModalContainer} from './style';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from "../../../Providers/models/user/user";

export const UserModal = ({state,setState}) => {

    const navigate = useNavigate();
    const { verify, setIsOpen } = useContext(UserContext);
    const { logoutUser } = useContext(UserContext)
    const {isLoggedinForDashboard} = useContext(UserContext)




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
                                isLoggedinForDashboard(navigate);
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
  