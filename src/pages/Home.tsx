import {
  createResource,
  createSignal,
  Suspense,
  Match,
  Switch,
  Component,
} from "solid-js";
import Search from "./Search";

let input: HTMLInputElement;

type Error = {
  code: number;
  data: never;
};

type Success = {
  code: never;
  data: {};
};

type ReturnData = Error | Success;

const Home: Component = () => {
  const [value, setValue] = createSignal<string>();

  const fetchData = async (value: string): Promise<ReturnData> => {
    const res = await fetch(
      `https://phoenix-lcd.terra.dev/cosmwasm/wasm/v1/contract/${value}/smart/ewogICJ0b2tlbl9pbmZvIjoge30KfQ==`
    );
    return res.json();
  };

  const [user] = createResource(value, fetchData);

  return (
    <>
      <div class="inline-block text-center mb-5 mt-44 lg:mb-16 lg:mt-28 align-center">
        <h1 class="my-5 top-12  md:top-12 md:my-5 text-white  md:text-6xl text-4xl font-sans font-extralight">
          Find a token!
        </h1>
        <input
          ref={input}
          type="search"
          maxLength="64"
          class="max-w-full pl-5 p-2 pr-5 md:w-96 font-sans font-extralight text-white text-lg  border border-indigo-400 bg-transparent rounded-full  placeholder:text-white/60"
          placeholder="Enter a token address..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          class="p-2 pl-3 mx-2 my-3 text-white/60 text-lg  font-extralight font-sans border border-indigo-400 rounded-full max-w-sm w-18 lg:w-20 hover:bg-violet-500 hover:text-white"
          type="submit"
          onClick={() => setValue(input.value)}
        >
          Search
        </button>
      </div>

      <div>
        <Suspense
          fallback={
            <p class="text-white/30 text-lg font-sans font-extralight">
              Loading...
            </p>
          }
        >
          <Switch>
            <Match when={user()?.code === 12}>
              <div class="font-extralight text-md lg:text-lg text-fuchsia-500 bg-transparent">
                <div>No input. Please enter a token address.</div>
              </div>
            </Match>
            <Match when={user()?.code}>
              <div class="text-fuchsia-500 text-md lg:text-lg font-extralight bg-transparent">
                <div>Invalid token address. Enter a valid token address.</div>
              </div>
            </Match>
            <Match when={!user.loading && !user.error && user() != null}>
              <div class="container m-auto md:min-w-fit w-max md:max-w-sm md:min-h-max p-3 md:p-5 text-white font-light bg-transparent border border-indigo-400 rounded-2xl shadow-md shadow-fuchsia-500/50">
                <h1 class="text-fuchsia-500 text-lg lg:text-xl">Results:</h1>
                <div> {Search(user()!)}</div>
              </div>
            </Match>
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default Home;
