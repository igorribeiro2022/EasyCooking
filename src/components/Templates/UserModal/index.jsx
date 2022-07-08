import {UserModalContainer} from './style';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from "../../../Providers/models/user/user";

export const UserModal = ({state,setState}) => {

    const navigate = useNavigate();
    const { verify } = useContext(UserContext);
    const { logoutUser } = useContext(UserContext)
    const {isLoggedinForDashboard} = useContext(UserContext)




    return (
        <UserModalContainer>

                {state === true ? 
                    <div className="UserModal">
                     <button onClick={() => setState(false)} className="UserButton"></button>
                        <div className="UserModalContent">

                            <button onClick={() => {
                                navigate("/");
                            }}>Home</button>

                            <button onClick={() => {
                                isLoggedinForDashboard(navigate);
                            }}>Dashboard</button>


                             { 
                                verify ? (
                                    <button onClick={() => {
                                        logoutUser(navigate)
                                    }}>Logout</button>
                                ) : (
                                    <button onClick={() => navigate("/login")}>Login</button>
                                )}
    
                            
                        </div>
                    </div>
                    :
                    <div></div>

                }

            

        </UserModalContainer>
    );
}
  