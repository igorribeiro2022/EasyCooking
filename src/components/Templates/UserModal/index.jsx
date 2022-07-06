import {UserModalContainer} from './style';

export const UserModal = ({state,setState}) => {

    return (
        <UserModalContainer>

                {state === true ? 
                    <div className="UserModal">
                     <button onClick={() => setState(false)} className="UserButton"></button>
                        <div className="UserModalContent">
                            <button>Home</button>
                            <button>Dashboard</button>
                            <button>Logout</button>
                        </div>
                    </div>
                    :
                    <div></div>

                }

            

        </UserModalContainer>
    );
}
  