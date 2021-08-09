import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Navbar from '../components/navbar/Navbar'
import OpeningPage from '../pages/openingPage/OpeningPage'
import Create from '../pages/create/Create'
import StarterPlayModePage from '../pages/‏‏playModePage/StarterPlayModePage'
import Spinner from './spinner/Spinner';


const App = () => {
  //Cheack if the playing console is open.
  const [consoleIsOpen, setConsoleIsOpen] = useState(false);
  //Current collection selected.
  const [currentCollection, setCurrentCollection] = useState(null);

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
    if (localStorage.token && !isUserLogedIn) {
      setIsUserLogedIn(true)
      setUserName(localStorage.getItem('name'))
    }
    //Set loading spinner to false
    setIsLoading(false);
  }, [isUserLogedIn])

  return (
    <>
      <>
        {isLoading && <Spinner />}
        {/* { console.log(window.location.href)} */}
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

// import { useEffect, useState } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'
// import Home from '../pages/home/Home'
// import Navbar from '../components/navbar/Navbar'
// import OpeningPage from '../pages/openingPage/OpeningPage'
// import Create from '../pages/create/Create'
// import StarterPlayModePage from '../pages/‏‏playModePage/StarterPlayModePage'


// const App = () => {


//   const [consoleIsOpen, setConsoleIsOpen] = useState(false)

//   const [currentCollection, setCurrentCollection] = useState(null)

//   const [isLoged, setIsLoged] = useState(false)
//   const [userName, setUserName] = useState(null)
//   useEffect(() => {
//     if (localStorage.token) {
//       setIsLoged(true)
//       setUserName(localStorage.getItem('name'))
//     }
//   }, [isLoged])

//   return (
//     <>
//       <>
//         {!isLoged && <OpeningPage setIsLoged={setIsLoged} />}
//         <BrowserRouter>
//           {isLoged && <>
//             {!consoleIsOpen && <Navbar userName={userName} />}
//             <Route path="/" exact
//               component={() =>
//                 <Home
//                   setConsoleIsOpen={setConsoleIsOpen}
//                   consoleIsOpen={consoleIsOpen}
//                   setCurrentCollection={setCurrentCollection}
//                 />
//               }
//             >
//             </Route>
//             < Route path="/home" exact component={() =>
//               <Home
//                 setConsoleIsOpen={setConsoleIsOpen}
//                 consoleIsOpen={consoleIsOpen}
//                 setCurrentCollection={setCurrentCollection}
//               />
//             }
//             />
//             < Route path="/create" exact component={() =>
//               <Create />
//             }
//             />
//             < Route path="/console" exact component={() =>
//               <StarterPlayModePage
//                 consoleIsOpen={consoleIsOpen}
//                 setConsoleIsOpen={setConsoleIsOpen}
//                 currentCollection={currentCollection}
//               />
//             }
//             />
//           </>}
//         </BrowserRouter>
//       </>
//     </>
//   );
// }

// export default App;

