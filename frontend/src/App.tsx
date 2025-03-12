import Aurora from "./components/Aurora"
git rm -r --cached node_modules
const App = () => {
  return (
    <div className="w-full bg-zinc-900 h-screen flex items-center justify-center">
      <Aurora 
      //  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
      //  blend={0.5}
      //  amplitude={1.0}
      //  speed={0.5}
      />
    </div>
  )
}

export default App