import './App.css'
import { AntButton } from './components/AntBtn';
import { StyButton } from "./components/StyleBtn"
function App() {

  return (
    <div className="App">
      < AntButton />

      <StyButton
        onClick={ () => {
          alert("Clicked Click Me");
        } }
      >
        Click Me
      </StyButton>

      <StyButton
        onClick={ () => {
          alert("Clicked Sign in");
        } }
      >  
        Sign In
      </StyButton>

      <StyButton >Change Theme</StyButton>

      <StyButton background={ "blue" } hoverbackground={ "#fcef3c" }>Primary Button</StyButton>
    </div>

    
  )
}

export default App
