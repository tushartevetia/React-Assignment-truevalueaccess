import React from 'react'
import {Link} from 'react-router-dom'


function NotFound() {
  return (
      <>
    <div className='text-center '>
       <div className='text-6xl font-bold'>
           OOPS! No User Found!
       </div>
        <Link to='/users' className='font-semibold relative top-5 p-2 rounded-md hover:bg-slate-500 bg-slate-300'>
                Back To Search     
        </Link>
    </div>
    </>
  )
}

export default NotFound