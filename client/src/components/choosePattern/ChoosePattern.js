import './choosePattern.css'
import { useEffect, useState } from 'react'
import Api from '../../api/Api'
// import { Link } from 'react-router-dom'

const ChoosePattern = ({ setChoosePatternIsOpen, setSelected, tempCurrentCollection, setIsOn }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingOnPage, setIsLoadingOnPage] = useState(true);

    const [patternOps, setPatternOps] = useState(null)
    const [current, setCurrent] = useState(null)





    useEffect(() => {
        const tagsRes = async () => {
            try {
                const tempRes = await Api.get(`/patterns/all/${tempCurrentCollection}`)
                // setTagsOptions(await tempRes.data.sort())
                setPatternOps(tempRes.data[0].patterns)
                // setSelectorVal(await tempRes.data[0])
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }

        }
        tagsRes()
        setIsLoadingOnPage(false)
    }, [tempCurrentCollection])


    const setList = () => {
        return patternOps.map((e, i) => {
            return (
                <div
                    onClick={(e) => {
                        if (current === e.target.id) {
                            setCurrent(null)
                        } else {
                            setCurrent(e.target.id)
                        }
                    }}
                    id={e._id}
                    key={`patternOps-${i}`}
                    className='search-sound-result-container'
                >
                    <div
                        id={e._id}
                        className={`search-sound-file-sound ${current === e._id ? 'search-sound-file-sound-selected' : ''}`}
                    >

                        <div
                            style={{ display: 'flex' }}
                            id={e._id}
                        >{e.name}</div>
                        <div
                            id={e._id}>
                            <span
                                id={e._id}
                            >by: </span>
                            <span
                                id={e._id}
                                style={{ marginLeft: '0.6rem' }}
                                key={`soundlist-tag-${i}`}>{e.userName}
                            </span>
                        </div>
                    </div>
                </div >
            )
        })
    }

    return (
        <>{isLoadingOnPage && <div className='search-sound-loading-on-page'></div>}
            <div className='search-sound-top'>
                <div className="search-sound-container">

                    {!isLoading && <>
                        {/* <Link to='/'> */}
                        <div className='add-sound-exit'
                            onClick={() => setChoosePatternIsOpen(false)}
                        >
                            X</div>
                        {/* </Link> */}
                        <h2 className="search-sound-container-h2">Choose Pattern</h2>

                        <div className='search-sound-results'>
                            {patternOps && setList()}
                        </div>
                        <button
                            className='search-sound-button'
                            onClick={() => {
                                setChoosePatternIsOpen(false)
                                setSelected(current ? current : 'empty')
                                setIsOn(true)
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