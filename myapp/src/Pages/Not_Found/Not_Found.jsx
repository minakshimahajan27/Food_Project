import React from 'react'
import { Link } from 'react-router-dom';
import "./Not_Found.css"
export default function Not_Found() {
  return (
    <>
      <div className="not-found-container">
        <img src='notFound.svg'/>
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>We can't seem to find the page you're looking for</p>
         <Link to="/">
        <button > Back to Home &rarr;
        </button>
      </Link>
      </div>
    </>
  )
}
