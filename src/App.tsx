import { FinalScreen } from "./components/finalScreen"
import { Header } from "./components/header"
import { Info } from "./components/info"
import { Portfolio } from "./components/portfolio"

function App() {

  return (
    <div className="bg-primary h-full pt-[25px] max-sm:px-[30px] min-md:px-[100px]">
      <Header />
      <Info />
      <Portfolio />
      <FinalScreen />
    </div>
  )
}

export default App
