export default function Search(input: object) {
  const response: any = input;

  if (response) {
    if (response?.message) {
      return <div>Invalid token address. Enter valid token address</div>;
    } else {
      const name: string = response.data.name;
      const symbol: string = response.data.symbol;
      const supply: string = response.data.total_supply;

      return (
        <p class="text-white font-extralight text-lg lg:text-lg">
          Name: {name} <br />
          Symbol: {symbol} <br />
          Total Supply: {supply}
        </p>
      );
    }
  } else if (response == undefined) {
    return "Invalid token address. Please try again.";
  }
}
