import { stringify } from 'postcss';
import logo from './assets/coinhall_logo.png';
import { createResource, createSignal } from 'solid-js';


function App(): any {

  const fetchData = async (value: string) => {
    const res = await fetch('https://phoenix-lcd.terra.dev/cosmwasm/wasm/v1/contract/' + value + '/history')
    return res.json()
  };



  // let data: [string, string, number];
  // if (fetchData != null) {
  //   const data: any 
  // }

  // const data:  = {
  //   name: {fetchData.entries.msg.name},
  //   symbol: {fetchData.entries.msg.symbol},
  //   supply: number
  // };

  return (
    <>
    <header class="m-auto content-center flex-auto " >
      <img src={logo} alt="logo"/>
      <h1 class="text-violet-500 text-8xl font-medium font-sans">Coinhall</h1> 
    </header>

      <div class="container content-center">
          <h2 class="text-violet-300 m-auto font-sans">Enter a token address:</h2> 
          <input type="text"/>
          <input type="submit" class="btn" />
      </div>
    </>
  )
}

export default App;
