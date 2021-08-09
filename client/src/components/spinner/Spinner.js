import './spinner.css'
const Spinner = ({ messege = '', messege2 = '' }) => {
    return (
        <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: "center", height: '100vh' }}>
            <div style={{ marginBottom: '2.5rem' }} className='glow-card-h2 font-red-shadow-red'>{messege}</div>
            <div className="loader">
                <span className="loader-span"></span>
                <span className="loader-span"></span>
                <span className="loader-span"></span>
                <span className="loader-span"></span>
            </div>
            <div style={{ marginTop: '2.5rem' }} className='glow-card-h2 font-red-shadow-red'>{messege2}</div>
        </div>
    )
}
export default Spinner;
