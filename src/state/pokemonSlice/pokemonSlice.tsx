import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"

interface InitialState {
    pokemonData: any
}

const initialState: InitialState = {pokemonData: null}

const pokemonSlice = createSlice({
    name: "pokemonSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(searchPokemonAsync.pending, () => {
            console.log("Fetching pokemon")
        }).addCase(searchPokemonAsync.fulfilled, (state, action:PayloadAction) => {
            state.pokemonData = action.payload
            console.log(state.pokemonData)
        })
    },
})

export const searchPokemonAsync = createAsyncThunk (
    "pokemonSlice/searchPokemonAsync",
    
    async(pokemonName: string) => {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

        const response = await fetch(apiUrl)
        if(!response.ok) {
            throw new Error("Failed to fetch API")
        }
        const data = await response.json()

        return data

    }
)

export default pokemonSlice.reducer