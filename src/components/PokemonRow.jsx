import { Button, TableRow, TableCell } from "@mui/material"
import { useContext } from "react";
import PokemonContext from "../PokemonContext";

// onDetail es un custom event, una función que actúa sobre el setter en el componente que tiene el estado (App).
const PokemonRow = ({ pokemon }) => {
    const { dispatch } = useContext(PokemonContext)
    return (
        <>
            <TableRow>
                <TableCell>{pokemon.name.english}</TableCell>
                <TableCell>{pokemon.type.join(", ")}</TableCell>
                <TableCell align="center">
                    <Button variant="outlined" color="secondary" onClick={() => dispatch({
                        type: 'SET_SELECTED_POKEMON',
                        payload: pokemon
                    })}>info</Button>
                </TableCell>
            </TableRow>
        </>
    )
};

export default PokemonRow