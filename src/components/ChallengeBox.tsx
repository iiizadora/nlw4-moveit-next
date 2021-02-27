import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContex';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

  const { activeChallenge, resetChallenge, completeChallenge}= useContext(ChallengesContext);
  const {resetCountdown} = useContext(CountdownContext);

  function handleChallengeSucceeded(){
    completeChallenge();
    resetCountdown();
  }
  
  function handleChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }


  return (
  <div className={styles.challengeBoxContainer}>
   { activeChallenge ?(
     <div className={styles.challengeActive}>
      <header>Ganhe {activeChallenge.amount} xp</header>
      <main>
        <img src={`icons/${activeChallenge.type}.svg`} />
        <strong>Novo desafio</strong>
        <p>{activeChallenge.description}</p>
      </main>

      <footer>
        <button 
        type="button"
        className={styles.challengeFailedButton}
        onClick={handleChallengeFailed}
        >
          FALHEI
        </button>
        <button 
        type="button"
        className={styles.challengeSucceededButton}
        onClick={handleChallengeSucceeded}
        >
          VENCI
        </button>
      </footer>
     </div>
   ) :(
      <div className={styles.challengeNotActive}>
      <strong>Complete a contagem para receber um desafio </strong>
      <p>
        <img src="icons/level-up.svg" alt="Level Up"/>
        Comece o desafio hoje!
      </p>

    </div>
   )
    
   }
  </div>
  )
    
}