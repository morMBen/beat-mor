import OpeningPage from '../openingPage/OpeningPage';

const Home = ({ isLoged, setIsLoged }) => {
    return (
        <div style={{ color: 'white' }}>
            Home Page
            {!isLoged && <OpeningPage />}
        </div>
    )
}
export default Home;