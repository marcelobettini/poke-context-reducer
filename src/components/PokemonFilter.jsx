import PokemonContext from "../PokemonContext";
import { useContext } from "react";
import { TextField } from "@mui/material";
const PokemonFilter = () => {
    const { state, dispatch } = useContext(PokemonContext);
    return < TextField
        sx={{ width: '20ch' }}
        label="Search..." variant="filled"
        value={state.filter}
        onChange={(e) => dispatch({
            type: 'SET_FILTER',
            payload: e.target.value
        })
        }
    />
}
export default PokemonFilter

