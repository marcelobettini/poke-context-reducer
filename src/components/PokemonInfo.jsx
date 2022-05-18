import PokemonContext from "../PokemonContext";
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
import { useContext } from "react";
const PokemonInfo = () => {
    let power = 0
    const { state: { selectedPokemon }, dispatch } = useContext(PokemonContext)
    return selectedPokemon && (
        <Card sx={{ border: '1px solid lightGray', height: 310, minWidth: 250, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
            <CardContent>
                <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>{selectedPokemon.name.english}</Typography>
                {Object.keys(selectedPokemon.base).map((key) => {
                    power += +selectedPokemon.base[key]
                    return <Typography key={key}>{key} : {selectedPokemon.base[key]}</Typography>
                })}
                <Typography variant="h6" sx={{ textAlign: 'center' }}>Rank: {power}</Typography>

            </CardContent>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={() => dispatch({
                    type: 'SET_SELECTED_POKEMON',
                    payload: null
                })}>dismiss</Button>
            </CardActions>
        </Card >
    )
}
export default PokemonInfo