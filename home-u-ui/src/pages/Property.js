import React from 'react'
import { useState, useEffect } from 'react'
import Details from '../components/Details/Details'

const Property = ({ match }) => {

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(()=>{
            setIsLoaded(!isLoaded)
            console.log(match.params)
        },1500)
    },[])

    return (
        <div>
            { isLoaded ? <Details id={match.params.id}/> : <h1>Loading...</h1> }
        </div>
    )
}

export default Property
