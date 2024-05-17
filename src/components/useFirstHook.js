import React, { useEffect } from 'react'
import { useState } from 'react'

const useFirstHook = () => {

    const [data, setData] = useState("")

    useEffect(()=>{
        setData("welcome")
    })
    return (
        {data}
    )
}

export default useFirstHook
