import { Routes, Route } from "@solidjs/router";
import Home from "./pages/Home";

function App(): any {
  return (
    <>
      <div class="text-center items-center place-content-center h-screen w-screen bg-gradient-to-tl from-purple-700 via-violet-700 to-fuchsia-600">
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </div>
    </>
  );
}

export default App;
