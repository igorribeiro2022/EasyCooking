import { style, BoxStyled, AutoStyled, SelectStyled, TextFieldStyled, } from "./style";
import { Checkbox, Modal } from "@mui/material";
import { useContext } from "react";
import { IngredientsContext } from "../../../Providers/models/ingredients/ingredients";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { Api } from "../../../services/api";
import { toast } from "react-toastify";

export const AddRecipeModal = ({ open, setOpen }) => {
  const { listIngredients } = useContext(IngredientsContext);
  const [un, setUn] = useState("");
  const [ingredientSave, setIngredientSave] = useState([]);
  const [autocompleteValue, setAutocompleteValue] = useState("");
  const [autocomplete, setAutocomplete] = useState("");
  const [unity, setUnity] = useState("");
  const [quanti, setQuanti] = useState(0);
  const [dataUser, setDataUser] = useState(null);
  const [nameRecipe, setNameRecipe] = useState("");
  const [categRecipe, setCategRecipe] = useState("");
  const [linkRecipe, setLinkRecipe] = useState("");
  const [preparationRecipe, setPreparationRecipe] = useState("");

  useEffect(()=>{
    const idUser = localStorage.getItem("@Easy:Id")
    const token = localStorage.getItem("@Easy:Token")

    Api.get("/users/"+idUser, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(resp => setDataUser(resp.data))
    .catch(err => console.log(err))
  },[])

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite um nome"),
    category: yup.string(),
    image: yup.string().required("Coloque uma imagem"),
    preparation_mode: yup.string().required("Conte-nos o modo de preparo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    const token = localStorage.getItem("@Easy:Token")
    data.reviews = []
    data.ingredients = ingredientSave
    data.userName = dataUser.name
    data.userId = dataUser.id

    toast.promise(Api.post("/recipes", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }}), {
      pending: {
        render() {
          return "Criando";
        },
      },
      success: {
        render() {
          return "Receita criada com sucesso!";
        },
        icon: "🍝",
      },
      error: "Não foi possível criar, verifique as informações!",
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  }

  function saveRecipe() {
    setIngredientSave([])
    setOpen(!open)
    setNameRecipe("")
    setLinkRecipe("")
    setPreparationRecipe("")
  }
  function addIngredient(e) {
    e.preventDefault()
    const obj = {name: autocompleteValue, quantity: quanti, unit: unity}
    obj.name !== null && obj.quantity > 0 &&
    setIngredientSave([...ingredientSave, obj])
    console.log(ingredientSave)
    setAutocompleteValue(null)
    setQuanti([0])
    setUnity(0)
  }
  return (
    <Modal open={open} onClose={() => setOpen(!open)}>
      <BoxStyled sx={style}>
        <div className="div">
          <label>Nome</label>
          <input
            defaultValue={nameRecipe}
            onChange={(e)=>setNameRecipe(e.target.value)}
            type="text"
            placeholder="Digite aqui o nome da receita"
            {...register("name")}
          />
        </div>
        <div className="catImg">
          <div className="" {...register("category")}>
            <label>Categoria</label>
            <SelectStyled
              defaultValue={categRecipe}
              onChange={(e)=>setCategRecipe(e.target.value)}
              id="demo-simple-select"
              label="Unidade"
            >
              <option value="Prato Principal">Prato Principal</option>
              <option value="Sobremesas">Sobremesas</option>
              <option value="Lanches">Lanches</option>
              <option value="Bebidas">Bebidas</option>
            </SelectStyled>
          </div>
          <div className="">
            <label>Link da imagem</label>
            <input
              defaultValue={linkRecipe}
              onChange={(e) => setLinkRecipe(e.target.value)}
              type="text"
              placeholder="Coloque aqui o link da imagem"
              {...register("image")}
            />
          </div>
        </div>
        <div className="div">
          <label>Modo de Preparo</label>
          <textarea
            defaultValue={preparationRecipe}
            onChange={(e) => setPreparationRecipe(e.target.value)}
            type="text"
            placeholder="Digite aqui o modo de preparo"
            {...register("preparation_mode")}
          />
        </div>
        <form className="divIngre" onSubmit={handleSubmit(onSubmitFunction)}>
          <AutoStyled
            defaultValue={autocomplete}
            onChange={(event, newValue) => {
              setAutocompleteValue(newValue);
            }}
            inputValue={autocompleteValue}
            onInputChange={(event, newInputValue) => {
              setAutocomplete(newInputValue);
            }}
    
            options={listIngredients}
            disableCloseOnSelect
            getOptionLabel={(option) => {
              return option || "";
            }}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            style={{}}
            renderInput={(params) => (
              <TextFieldStyled
                variant="outlined"
                id="checkboxesIngredients"
                {...params}
                label="Ingredientes"
                placeholder="Escolha aqui"
              />
            )}
          />
          <SelectStyled
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={unity}
            label="Unidade"
            onChange={(e) => setUnity(e.target.value)}
          >
            <option value="Litros">Litros</option>
            <option value="MiliLitros">MiliLitros</option>
            <option value="Unidades">Unidades</option>
            <option value="Gramas">Gramas</option>
            <option value="Kg">Kg</option>
            <option value="Colher de Sopa">Colher de Sopa</option>
            <option value="Colher de chá">Colher de chá</option>
            <option value="Xícara">Xícara</option>
          </SelectStyled>
          <input defaultValue={quanti} type="number" min={0} max={1000} onChange={(e) => setQuanti(e.target.value)}/>
          <button className="butAdd" onClick={() => addIngredient()}>Adicionar</button>
          <button className="buttonSave" type="submit" >Salvar Receita</button>
        </form>
        <ul className="ulIngredients">
          {ingredientSave?.map((elem, index) => <li key={index}>{elem.name} - {elem.quantity} {elem.unit}</li>)}
        </ul>
      </BoxStyled>
    </Modal>
  );
};
