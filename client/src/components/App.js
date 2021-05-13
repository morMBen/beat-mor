import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from '../pages/home/Home'

const App = () => {
  const [isLoged, setIsLoged] = useState(false)
  const [userName, setUserName] = useState(null)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoged(true)
      setUserName(localStorage.getItem('name'))
    }
  }, [isLoged])

  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={() =>
          < Home
            setIsLoged={setIsLoged}
            isLoged={isLoged}
          />}
        >
        </Route>
        < Route path="/home" exact component={() =>
          <Home
            setIsLoged={setIsLoged}
            isLoged={isLoged}
          />}
        />
      </BrowserRouter>
    </>
  );
}

export default App;

