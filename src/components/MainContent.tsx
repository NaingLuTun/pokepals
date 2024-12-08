
import { useSelector } from 'react-redux'
import { RootState } from '../state/store'
const MainContent = () => {
    const pokemon = useSelector((state: RootState) => state.pokemonReducer.pokemonData)
    return (
        <div className=' flex w-full justify-center '>
        <div className='relative overflow-hidden'> 
        {pokemon?.sprites?.other?.home?.front_default && pokemon?.types[0]?.type?.name ? 
        <img src={pokemon?.sprites?.other?.home?.front_default} alt="" 
        className={`${pokemon?.types[0]?.type?.name === "normal" ? "gradient-background-normal" : 
            pokemon?.types[0]?.type?.name === "bug" ? "gradient-background-bug" : 
            pokemon?.types[0]?.type?.name === "dark" ? "gradient-background-dark" : 
            pokemon?.types[0]?.type?.name === "dragon" ? "gradient-background-dragon" :
            pokemon?.types[0]?.type?.name === "electric" ? "gradient-background-electric" :
            pokemon?.types[0]?.type?.name === "fairy" ? "gradient-background-fairy" :
            pokemon?.types[0]?.type?.name === "fighting" ? "gradient-background-fighting" :
            pokemon?.types[0]?.type?.name === "fire" ? "gradient-background-fire" :
            pokemon?.types[0]?.type?.name === "water" ? "gradient-background-water" :
            pokemon?.types[0]?.type?.name === "grass" ? "gradient-background-grass" :
            pokemon?.types[0]?.type?.name === "flying" ? "gradient-background-flying" :
            pokemon?.types[0]?.type?.name === "poison" ? "gradient-background-poison" :
            pokemon?.types[0]?.type?.name === "rock" ? "gradient-background-rock" :
            pokemon?.types[0]?.type?.name === "ground" ? "gradient-background-ground" :
            pokemon?.types[0]?.type?.name === "steel" ? "gradient-background-steel" :
            pokemon?.types[0]?.type?.name === "ice" ? "gradient-background-ice" :
            pokemon?.types[0]?.type?.name === "psychic" ? "gradient-background-psychic" :
            pokemon?.types[0]?.type?.name === "ghost" ? "gradient-background-ghost" : ""
        } rounded-full p-5 pokemonSprite`} /> : <span>loading...</span>}
        <span className='moving-line'></span>
        </div>
        
    </div>
    )
}

export default MainContent