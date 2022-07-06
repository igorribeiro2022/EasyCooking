import {UserModalContainer} from './style';
import {useNavigate} from 'react-router-dom';

export const UserModal = ({state,setState}) => {

    const navigate = useNavigate();

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
                                navigate("/dashboard");
                            }}>Dashboard</button>

                            <button onClick={() => {
                                navigate("/login");
                            }}>Logout</button>
                        </div>
                    </div>
                    :
                    <div></div>

                }

            

        </UserModalContainer>
    );
}
  