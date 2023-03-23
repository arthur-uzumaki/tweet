import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/header/Header"
import { Separator } from "../components/separator/Separator"
import { Tweet } from "../components/tweet/Tweet"
import './Timeline.css'


export function Timeline() {

  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweets',
    'Teste',
    'Deu certo tweetar!',

  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    // tweets.push(newTweet)
    setTweets([newTweet, ...tweets])
    setNewTweet('')

  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
     
      setTweets([newTweet, ...tweets])
      setNewTweet('')

    }
  }

  return (
    <main className='timeline'>

      <Header title='Home' />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet" >
          <img src="https://github.com/Arttanjeiro.png" alt="Arthur Sousa" />
          <textarea id='tweet'
            value={newTweet}
            placeholder="What's happening? "
            onChange={(e) => setNewTweet(e.target.value)}
            onKeyDown={handleHotkeySubmit}
          />

        </label>

        <button type='submit'> Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}

    </main>
  )
}