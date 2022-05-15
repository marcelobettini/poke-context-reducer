import PokemonContext from "../PokemonContext";
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import { useContext } from "react";
const PokemonInfo = () => {
    const { state: { selectedPokemon }, dispatch } = useContext(PokemonContext)
    return selectedPokemon && (
        <Card sx={{ height: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
            <CardContent>
                <Typography variant="h5" gutterBottom>{selectedPokemon.name.english}</Typography>
                {Object.keys(selectedPokemon.base).map((key) => (
                    <Typography key={key}>{key} : {selectedPokemon.base[key]}</Typography>
                ))}
            </CardContent>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={() => dispatch({
                    type: 'SET_SELECTED_POKEMON',
                    payload: null
                })}>dismiss</Button>
            </CardActions>
        </Card>
    )
}
export default PokemonInfo