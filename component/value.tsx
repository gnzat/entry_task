// import fetchData from "../src/App";
import { createResource, Show} from "solid-js"

function Value(): any {
  const fetchData = async (value: string) => {
      const res = await fetch('https://phoenix-lcd.terra.dev/cosmwasm/wasm/v1/contract/' + value + '/history')
      return res.json()
    }

  const [data] = createResource(fetchData);

  return (
    <Show when={data()} fallback={<p>Loading...</p>}>
        Token name: {fetchData.entries.msg.name}
        Symbol: {fetchData.entries.msg.name}
        Total supply: 

      </Show>
  )

}


