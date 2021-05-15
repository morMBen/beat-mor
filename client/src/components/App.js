import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import OpeningPage from '../pages/openingPage/OpeningPage'
import Create from '../pages/create/Create'
import StarterPlayModePage from '../pages/‏‏playModePage/StarterPlayModePage'


const App = () => {
  const [openPage, setOpenPage] = useState(false)


  const [consoleIsOpen, setConsoleIsOpen] = useState(false)

  const [currentCollection, setCurrentCollection] = useState(null)

  const [isLoged, setIsLoged] = useState(false)
  const [userName, setUserName] = useState(null)
  useEffect(() => {
    if (localStorage.token) {
      setIsLoged(true)
      setUserName(localStorage.getItem('name'))
    }
  }, [isLoged])

  return (
    <>
      {!openPage && <button
        style={{ background: 'white' }}
        onClick={() => setOpenPage(true)}>open</button>}
      {openPage && <>
        {!isLoged && <OpeningPage setIsLoged={setIsLoged} />}
        <BrowserRouter>
          {isLoged && <>
            {!consoleIsOpen && <Navbar userName={userName} />}
            <Route path="/" exact
              component={() =>
                <Home
                  setConsoleIsOpen={setConsoleIsOpen}
                  consoleIsOpen={consoleIsOpen}
                  setCurrentCollection={setCurrentCollection}
                />
              }
            >
            </Route>
            < Route path="/home" exact component={() =>
              <Home
                setConsoleIsOpen={setConsoleIsOpen}
                consoleIsOpen={consoleIsOpen}
                setCurrentCollection={setCurrentCollection}
              />
            }
            />
            < Route path="/create" exact component={() =>
              <Create />
            }
            />
            < Route path="/console" exact component={() =>
              <StarterPlayModePage
                consoleIsOpen={consoleIsOpen}
                setConsoleIsOpen={setConsoleIsOpen}
                currentCollection={currentCollection}
              />
            }
            />
          </>}
        </BrowserRouter>
      </>}
    </>
  );
}

export default App;

