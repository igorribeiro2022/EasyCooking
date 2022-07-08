import {UserModalContainer} from './style';
import {useNavigate} from 'react-router-dom';

export const UserModal = ({state,setState}) => {

    const navigate = useNavigate();

    const isLogged = localStorage.getItem("@Easy:Token")

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

                            {isLogged ? (
                                <button onClick={() => {
                                    localStorage.clear()
                                    navigate("/login");
                                }}>Logout</button>
                            ) : (
                                <button onClick={() => navigate("/login")} >Login</button>
                            )}

                        </div>
                    </div>
                    :
                    <div></div>

                }

            

        </UserModalContainer>
    );
}
  