import Navbar from "./components/Navbar"
import TalentProfileCard from "./components/TalentProfileCard"

function App() {


  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-6">Black Talent Spotlight</h1>
      <TalentProfileCard />
    </div>
    </>
  )
}

export default App
