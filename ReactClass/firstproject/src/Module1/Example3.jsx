import React from 'react'

function Example3() {
    let content="Welcome to RJS"
    let handleclick=()=>{
        alert("welcomem home")
    }
  return (
    <div>
      <h1>{content}</h1>
      <button onClick={handleclick}>Click</button>
    </div>
  )
}

export default Example3
