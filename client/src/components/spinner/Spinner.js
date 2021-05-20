import './spinner.css'
const Spinner = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", height: '100vh' }}>
            <div class="loader">
                <span class="loader-span"></span>
                <span class="loader-span"></span>
                <span class="loader-span"></span>
                <span class="loader-span"></span>
            </div>
        </div>
    )
}

export default Spinner;
