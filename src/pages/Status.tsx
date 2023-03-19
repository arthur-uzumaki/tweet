
import { Header } from '../components/header/Header'
import { Separator } from '../components/separator/Separator'
import { Tweet } from '../components/tweet/Tweet'
import './Status.css'

const answers =[
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo seu progresso.'
]

export function Status(){

  return(
    <main className='status'>

    <Header title='Tweet' />
    <Tweet content='
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem asperiores laudantium cumque autem ex, facilis nobis mollitia unde nostrum eum veritatis accusantium obcaecati labore voluptatibus ab debitis eveniet error non.'/>

    <Separator />
    <form className='answer-tweet-form'>
      <label htmlFor="tweet">
        <img src="https://github.com/Arttanjeiro.png" alt="Arthur Sousa" />
        <textarea id='tweet' placeholder="Tweet your answer? " />
      </label>

      <button type='submit'> Answer</button>
    </form>


    {answers.map(answer =>{
     return <Tweet key={answer} content={answer}/>
    })}

  </main>
  )
}