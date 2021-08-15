import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import OpeningPage from '../pages/openingPage/OpeningPage'
import Create from '../pages/create/Create'
import StarterPlayModePage from '../pages/‏‏playModePage/StarterPlayModePage'
import Spinner from './spinner/Spinner';
import HelpMessage from './helpMessage/HelpMessage';


const App = () => {
  //Cheack if the playing console is open.
  const [consoleIsOpen, setConsoleIsOpen] = useState(false);
  //Current collection selected.
  const [currentCollection, setCurrentCollection] = useState(null);

  //
  const [currentPattern, setCurrentPattern] = useState(null);

  //check if the user is loged.
  const [isUserLogedIn, setIsUserLogedIn] = useState(false);

  //Set the user name.
  const [userName, setUserName] = useState(null)

  // Loding spinner bool
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //Set loading spinner to true
    setIsLoading(true);
    //if token is saved in the local storage:
    // - set the state isLoged to true.
    // - set the state userName to the name from local storage.

    if (typeof (localStorage.name) === 'string' && !isUserLogedIn) {
      console.log(localStorage.name.includes('Guest'))
      if (!localStorage.name.includes('Guest')) {
        setIsUserLogedIn(true)
        setUserName(localStorage.getItem('name'))
      } else {
        localStorage.clear()
        setIsUserLogedIn(false)
      }
    }
    //Set loading spinner to false
    setIsLoading(false);

  }, [isUserLogedIn])

  return (
    <>
      {/* <HelpMessage
        breadCrumb='Usage information'
        title='Playing Console'
        content='sfjalsjf lasnf lnfsfn afnasn asfndfn asnfdja nsjngaojwork r24 nkjassdjf nwswrfj askjfs kjdgkajs nagajsngj sgnajgnsaj gjagrjb akjksja jn'
        closeButton={() => console.log('Close button is working')}
      /> */}
      <>
        {isLoading && <Spinner />}
        {!isLoading && !isUserLogedIn && <OpeningPage setIsUserLogedIn={setIsUserLogedIn} />}
        <BrowserRouter>
          {!isLoading && isUserLogedIn && <>
            {!consoleIsOpen && <Navbar userName={userName} />}
            <Route path="/" exact
              component={() =>
                <Home
                  setConsoleIsOpen={setConsoleIsOpen}
                  consoleIsOpen={consoleIsOpen}
                  setCurrentCollection={setCurrentCollection}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                  setCurrentPattern={setCurrentPattern}
                />
              }
            >
            </Route>
            < Route path="/home" exact component={() =>
              <Home
                setConsoleIsOpen={setConsoleIsOpen}
                consoleIsOpen={consoleIsOpen}
                setCurrentCollection={setCurrentCollection}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                setCurrentPattern={setCurrentPattern}
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
                setcurrentCollection={setCurrentCollection}
                currentPattern={currentPattern}
              />
            }
            />
          </>}
        </BrowserRouter>
      </>
    </>
  );
}

export default App;

