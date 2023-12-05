import React from 'react'
import { FaEye } from 'react-icons/fa'

const Portfolio = () => {
  return (
    <div className='portfolio w-3/5 mx-auto py-4'>
        <h3 className=' text-3xl my-1 text-blue-500 font-bold'>
            Projects
        </h3>
        <h4 className=' text-md my-2 text-blue-800 font-bold'>
            Explore each of the projects 
        </h4>
        <div className="projects flex gap-12  items-center justify-between">
            <div className="image w-3/5">
                <img src="/lusite.png" alt="lightuniversal site" className=' shadow rounded-lg' />
            </div>
            <div className=' bg-white py-5 px-3 rounded-xl shadow-md text-center'>
                <h2 className=' text-2xl my-1 '>
                    PORTFOLIO
                </h2>
                <p>
                    This project was design using state design pattern. It provided a clue of how single page application works under the hood.
                </p>
                <div className='mt-5'>
                    <a href="https://lightuniversal.netlify.app" className=' flex justify-around text-slate-600 rounded-full items-center only:bg-green-200 w-20 p-1 py-2'>Live <FaEye /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio