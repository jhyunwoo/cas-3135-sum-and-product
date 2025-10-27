import { useState } from 'react'


function App() {
  const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    const [res, setRes] = useState({type:"",sum:0, prod:0})

  return (
    <div className={'w-full h-screen flex items-center justify-center'}>
        <div>
            <form onSubmit={async (e) => {
                e.preventDefault()
                const result = await fetch(`https://e9buh1mr78.execute-api.ap-northeast-2.amazonaws.com/default/cas-3135-2024148005-sum?x=${a}&y=${b}`)
                const data = await result.json()
                setRes(data)
            }}>
                <input onChange={(e)=>setA(Number(e.target.value))} type={'number'} placeholder={'Enter A'}/>
                <input onChange={(e)=>setB(Number(e.target.value))} type={'number'} placeholder={"Enter B"}/>
                <button type={'submit'}>Submit</button>
            </form>
            <div>
                <div>{res.type}</div>
                <div>{res.sum}</div>
                <div>{res.prod}</div>
            </div>
        </div>
    </div>
  )
}

export default App
