import './choosePattern.css'
import { useEffect, useState } from 'react'
import Api from '../../../api/Api'
import { Link, useHistory } from 'react-router-dom'
import Spinner from '../../../components/spinner/Spinner'

//{ setChoosePatternMenuIsOpen, tempCurrentCollection, setCurrentCollection, setIsOn }
const ChoosePattern = ({
    setChoosePatternMenuIsOpen,
    tempCurrentCollection,
    setCurrentCollection,
    setConsoleIsOpen,
    setCurrentPattern
}) => {
    // Is the component loading.
    const [isLoading, setIsLoading] = useState(true);
    // Is the page events are currently active.
    const [isPageActive, setIsPageActive] = useState(true);
    //Sounds pattern Object
    //@Object - id: String , userName: String, patternOwner: String, name(pattern name): String
    const [patternOps, setPatternOps] = useState(null)

    const [currentSelectedPatternId, setCurrentSelectedPatternId] = useState(null)

    const history = useHistory();

    useEffect(() => {
        setIsPageActive(false);
        const patternRes = async () => {
            try {
                const tempRes = await Api.get(`/patterns/all/${tempCurrentCollection}`)
                // setTagsOptions(await tempRes.data.sort())
                setPatternOps(tempRes.data[0].patterns ? tempRes.data[0].patterns : [])
                // setSelectorVal(await tempRes.data[0])
                setIsLoading(false);
            } catch (e) {
                //Print the error to the Inspect.
                setPatternOps([])
                console.log(e);
            }
        };
        // Invoke @patternRes.
        patternRes();
        setIsPageActive(true)
    }, [tempCurrentCollection])

    // Mapping the patternOps object
    // @ return pattern options elements
    const setList = () => {
        if (patternOps.length > 0) {
            return patternOps.map((e, i) => {
                return (
                    <div
                        onClick={(e) => {
                            if (currentSelectedPatternId === e.target.id) {
                                setCurrentSelectedPatternId(null)
                            } else {
                                setCurrentSelectedPatternId(e.target.id)
                            }
                        }}
                        id={e._id}
                        key={`patternOps-${i}`}
                        className='align-center flex'
                    >
                        <div
                            id={e._id}
                            className={`search-sound-file-sound ${currentSelectedPatternId === e._id ? 'search-sound-file-sound-selected' : ''}`}
                        >
                            <div
                                className='flex glow-card-h3'
                                id={e._id}
                            >{e.name}</div>
                            <div
                                className='flex glow-card-h3'
                                id={e._id}>
                                <span
                                    id={e._id}
                                >by:
                                    <span
                                        id={e._id}
                                        style={{ marginLeft: '0.3rem' }}
                                        key={`soundlist-tag-${i}`}>{e.userName}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div >
                )
            })
        } else {
            return <div className='font-white-shadow-green glow-card-h4 margin-left-05r'>No Pattern found</div>
        }
    }

    return (
        <>
            {/* {!isPageActive && <div className='glow-card-background'></div>} */}
            <div className='glow-card-background'>
                <div className="glow-card-container choose-pattern-container-height">
                    {isLoading && <Spinner
                        messege='Loading patterns please wait a bit.'
                        messege2='Thenks...'
                    />}
                    {!isLoading && <>
                        <Link to='/'>
                            <div className='exit-button'
                                onClick={() => setChoosePatternMenuIsOpen(false)}
                            >
                                X</div>
                        </Link>
                        <div className="glow-card-h2 font-red-shadow-red">Choose Pattern :</div>
                        <div className="glow-card-h3 font-orange-shadow-red">- Highlight by click the pattern name you want and press submit to open the console.  </div>
                        <div className="glow-card-h3 font-orange-shadow-red">- Wanna start from no pattern? just press submit and start play.</div>
                        <div className='search-sound-results'>
                            {patternOps && setList()}
                        </div>
                        <button
                            className='glow-card-button'
                            onClick={() => {
                                setChoosePatternMenuIsOpen(false)
                                setCurrentCollection(tempCurrentCollection ? tempCurrentCollection : 'empty')
                                // setIsOn(true)
                                setConsoleIsOpen(true)
                                setCurrentPattern(currentSelectedPatternId ? currentSelectedPatternId : 'empty');
                                console.log(history)
                                history.push('/console');
                            }
                            }
                        >
                            Submit
                        </button>
                    </>}
                </div>
            </div >
        </>
    )
}

export default ChoosePattern;