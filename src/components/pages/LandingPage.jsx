import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className='flex justify-center items-center h-screen'>
         <Link to="/login" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl">
        Déconnexion
        </Link>
    </div>
  )
}
