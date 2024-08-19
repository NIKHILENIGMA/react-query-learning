import { useQuery } from "@tanstack/react-query"

function Button () {
    const style = {
        padding: "10px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }

    const {data, error} = useQuery('todos', ()=> {
        return new Promise(resolve => {
        setTimeout(() => {
          resolve('data')
        }, 1000)
      })
    })
  
    console.log(data, error)
    return (
      <button style={style}>
        fetch button
      </button>
    
  )}

export default Button;