import { useEffect, useState } from 'react'
export default function CustomToggleButton({ initalValue = true, label = 'active',hasLabel=false,hasHandler=true,handler }) {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        setIsChecked(initalValue)
    }, [initalValue])

    const clickHandler = (e)=>{
        setIsChecked(e.target.checked)
        if(hasHandler){
           handler(e.target.checked)
        }
    }

    return (
        <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
            <input onChange={clickHandler} type="checkbox" checked={isChecked} id="default-toggle" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            { hasLabel && <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{isChecked ? `${label}` : `not ${label}`}</span>}
        </label>
    )
}
