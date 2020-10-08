import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MemeGenerator = () => {
  const [memeData, setMemeData] = useState()
  const [meme, setMeme] = useState({
    textBottom: '',
    textTop: '',
    img: 'http://i.imgflip.com/1bij.jpg'
  })

  const generator = (e) => {
    e.preventDefault()

    console.log('666')
  }

  const fetchData = () => {
    axios.get('https://api.imgflip.com/get_memes')
    .then(res => setMemeData(res.data.data.memes))
  }

    useEffect(() => {
    fetchData()
  }, [])

return (
   <div>
     <form onSubmit={generator} className="meme-form">
       <input type='text' value={meme.textTop} name='textTop' placeholder='text top' onChange={e => setMeme({ ...meme, textTop: e.target.value })} />
       <input type='text' value={meme.textBottom} name='textBottom' placeholder='text bottom' onChange={e => setMeme({ ...meme, textBottom: e.target.value })} />
       <button>gen</button>
     </form>
     <div className="meme">
        <img src={meme.img} alt='meme generator' />
        <h2 className='top'>{meme.textTop}</h2>
        <h2 className='bottom'>{meme.textBottom}</h2>
     </div>
   </div>
  )
}

export default MemeGenerator