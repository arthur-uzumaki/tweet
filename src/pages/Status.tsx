
import { Header } from '../components/header/Header'
import { Separator } from '../components/separator/Separator'
import './Status.css'

export function Status(){

  return(
    <main className='status'>

    <Header title='Tweet' />

    <form className='new-tweet-form'>
      <label htmlFor="tweet">
        <img src="https://github.com/Arttanjeiro.png" alt="Arthur Sousa" />
        <textarea id='tweet' placeholder="What's happening? " />
      </label>

      <button type='submit'> Tweet</button>
    </form>

    <Separator />

    {/*tweets.map(tweet =>{
     return <Tweet key={tweet} content={tweet}/>
    })*/}

  </main>
  )
}