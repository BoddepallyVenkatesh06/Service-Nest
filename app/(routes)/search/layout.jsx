import React from 'react'
import CategorySideBar from './_components/CategorySideBar'

function layout({ children }) {
    return (
        <div className='wrapper'>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-8'>
                {/* Side Category Nav bar  */}
                <CategorySideBar />

                <div className='md:col-span-3 '>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout