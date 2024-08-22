import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-6 md:px-10 md:py-7  md:justify-between lg:px-20 lg:py-16">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
