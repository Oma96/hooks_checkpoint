import React from 'react'

function Filter({input,setInput}) {

    


     const handleInput=(e) => {
         setInput(e.target.value) }

         const addHandler=(e)=>{
            e.preventDefault()
        setInput("")
        console.log({input})
    }

  
    return (
        <div>
          <form>
          <input
        type='text'
        value={input}
         onChange={handleInput}
        ></input>
        <button onClick={addHandler}>Search</button>
        </form>
        </div>
    )
}

export default Filter

