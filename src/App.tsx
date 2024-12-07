import { useSelector } from 'react-redux'
import { RootState } from './state/store'
import Search from './components/Search'

function App() {
  const pokemon = useSelector((state: RootState) => state.pokemonReducer.pokemonData)


  return (
    <>
      <h1 className='text-center w-full header'>PokePals</h1>
      <Search />
      <div className=' flex w-full justify-center '>
        <div className='relative overflow-hidden'> 
          {pokemon && <img src={pokemon?.sprites?.other?.home?.front_default} alt="" className='gradient-background-animation rounded-lg pokemonSprite' />}
          <span className='moving-line'></span>
        </div>
        
      </div>
      
    </>
  )
}

export default App
