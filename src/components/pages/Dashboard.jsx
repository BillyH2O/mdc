import React from 'react'
import { useParams } from 'react-router-dom'

export default function Dashboard() {
    const { username } = useParams()
    console.log("test : ", username)
    return (
    <h1>Dashboard de { username }</h1>
  )
}
