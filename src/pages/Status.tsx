
import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../components/header/Header'
import { Separator } from '../components/separator/Separator'
import { Tweet } from '../components/tweet/Tweet'
import './Status.css'


/*
* Fluxo de  renderização
*
* 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
* 2. Toda vez que o seu componente PAI renderizar.
* 3. Toda vez que que alguma das suas propriedades mudarem.

*/

/**
 * Algoritimo de reconciliação
 * 
 * 1. Cria em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff)
 * 3. Aplicar as operações JavaScript para alterar somente o necesário no HTML
 * 
 */

export function Status() {


  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo seu progresso.'

  ])
  function createNewAnswers(event: FormEvent) {
    event.preventDefault()


    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }

  return (
    <main className='status'>

      <Header title='Tweet' />
      <Tweet content='
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem asperiores laudantium cumque autem ex, facilis nobis mollitia unde nostrum eum veritatis accusantium obcaecati labore voluptatibus ab debitis eveniet error non.'/>

      <Separator />
      <form onSubmit={createNewAnswers} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/Arttanjeiro.png" alt="Arthur Sousa" />
          <textarea id='tweet'
            value={newAnswers}
            onChange={(e) => setNewAnswers(e.target.value)}
            onKeyDown={handleHotkeySubmit}
            placeholder="Tweet your answer? " />
        </label>

        <button type='submit'> Answer</button>
      </form>


      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}