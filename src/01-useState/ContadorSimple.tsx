import React, { useState } from 'react'

export const ContadorSimple = () => {
    const [contador, setcontador] = useState(0)

    const sumaResta = (valor: number)=> {

       return setcontador( contador + valor )
    }  


  return (
    <>
    <div>contador</div>

    <h2 onClick={ ()=> { sumaResta(+1) }}>+1</h2>

    <h2 onClick={ ()=> { sumaResta(-1)}}>-1</h2>
    
    </>

  )
}
