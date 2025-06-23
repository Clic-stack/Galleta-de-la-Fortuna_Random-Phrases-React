import './FortuneButton.css'

function FortuneButton({ handleClick }) {
  return (
    <button className='btn' onClick={handleClick}>
        Tú fortuna te espera detrás de un click
    </button>
  )
}

export default FortuneButton