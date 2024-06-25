import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
        ErrorPage
        <Link to="/" className="w-15 h-11 rounded-lg bg-green-400 text-white flex justify-center items-center">
            Revenir à la page d'accueil
        </Link>
    </div>
  )
}