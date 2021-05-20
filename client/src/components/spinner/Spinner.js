import './spinner.css'
const Spinner = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", height: '100vh' }}>
            <div className="loader">
                <span className="loader-span"></span>
                <span className="loader-span"></span>
                <span className="loader-span"></span>
                <span className="loader-span"></span>
            </div>
        </div>
    )
}
export default Spinner;
