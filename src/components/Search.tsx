import { useDispatch } from 'react-redux'
import { AppDispatch } from '../state/store'
import React, { useState } from 'react'
import { searchPokemonAsync } from '../state/pokemonSlice/pokemonSlice'
const Search = () => {

    const [pokemonName, setPokemonName] = useState<string>("")

    const [buttonHovered, setButtonHovered] = useState(false)
  
    const dispatch = useDispatch<AppDispatch>()
  
    const handleSearchPokemon = () => {
        const typedPokemonName = pokemonName.toLocaleLowerCase().trim()
        dispatch(searchPokemonAsync(typedPokemonName))
    }
  return (
    <div className='flex w-full justify-center gap-[5px] mt-[20px] '>
        <input type="text" placeholder='Enter pokemon name' value={pokemonName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPokemonName(e.target.value)} className='border-[#0007] border-2 p-2 rounded-md font-[600] focus:outline-none' />
        <button onMouseEnter={() => setButtonHovered(true)} onMouseLeave={() => setButtonHovered(false)} className="relative bg-gradient-to-r from-[#FF0000] to-[#ff831e] text-white font-[600] p-2 rounded-md overflow-hidden" onClick={handleSearchPokemon}>
            <span className={`absolute inset-0 bg-gradient-to-l from-[#FF0000] to-[#ff831e] transition-opacity duration-500 ease-in-out opacity-0 ${buttonHovered? "opacity-100" : ""}`}></span>
            <span className="relative z-10">Search Pokemon</span>
        </button>
    </div>
  )
}

export default Search