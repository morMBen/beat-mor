const HelpMessage = ({ title, breadCrumb, content, closeButton }) => {
    return (
        <>
            <div className='glow-card-background'>
                <div
                    style={{
                        width: '80%',
                        height: '80%',
                        justifyContent: 'flex-start',
                        padding: '3rem',
                        margin: '1rem'
                    }}
                    className='glow-card-container '>
                    <h2 className='glow-card-h2 font-white-shadow-green uppercase'>{breadCrumb}</h2>
                    <h1 className='glow-card-h1 font-color-red'
                        style={{ alignSelf: 'end' }}
                    >{title}:</h1>
                    <div className='glow-card-h3 '>{content}</div>
                    <div className='glow-card-h3 font-orange-shadow-red '>{title}</div>
                    <button
                        className='exit-button'
                        onClick={() => { closeButton() }}
                    >x</button>
                    <button
                        className='exit-button'
                        onClick={() => { closeButton() }}
                    >x</button>
                </div>
            </div>
        </>
    )
}

export default HelpMessage;