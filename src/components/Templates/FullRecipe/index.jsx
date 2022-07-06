import {FullRecipeContainer} from './style';

export const FullRecipe = ({state,setState}) => {

    return (
        <FullRecipeContainer>

            {state === true ? 
                <div className="FullRecipe">
                    <button onClick={() => setState(false)} className="UserButton">X</button>
                    <div className="UserModalContent">
                        <span>Descrição</span>
                        <button>Salvar Receita</button>
                    </div>
                </div>
                :
                <div></div>

            }

        </FullRecipeContainer>
    );
}
