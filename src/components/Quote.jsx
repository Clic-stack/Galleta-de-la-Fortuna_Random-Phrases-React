import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import { FaRegCopy, FaTwitter, FaWhatsapp, FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaReddit } from 'react-icons/fa'
import './Quote.css'

function Quote({ phrase }) {

  const copyPhrase = () => {
    navigator.clipboard.writeText(phrase)
    .then(() => alert('Frase copiada al portapapeles!📄' ))
    .catch(err => console.error('Error al copiar la frase: ', err));
  }

  const shareTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(phrase)}`;
    window.open(tweetUrl, '_blank');
  }

  const shareFacebook = () => {
    const currentfacebookUrl = `${window.location.href}?phrase=${encodeURIComponent(phrase)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentfacebookUrl)}`;
    window.open(facebookUrl, '_blank');
  }

  const shareWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(phrase)}`;
    window.open(whatsappUrl, '_blank');
  }

  const shareTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(phrase)}`;
    window.open(telegramUrl, '_blank');
  }

  const shareLinkedIn = () => {
    const currentlinkedInUrl = `${window.location.href}?phrase=${encodeURIComponent(phrase)}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentlinkedInUrl)}`
    window.open(linkedInUrl, '_blank');
  }

  const shareReddit = () => {
    const urlApp = `${window.location.href}?phrase=${encodeURIComponent(phrase)}`
    const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(urlApp)}&title=${encodeURIComponent(phrase)}`;
    window.open(redditUrl, "_blank");
  }

  return (
    <blockquote className='card'>
        <div className='card__body'>
          <p className='card__text'>
          <RiDoubleQuotesL className='card__quote'/>
            {' '}{phrase}{' '}
            <RiDoubleQuotesR className='card__quote'/>
            </p>
            <div className='card__buttons'>
          <button onClick={copyPhrase} title="Copiar frase">
            <FaRegCopy /> 
          </button>
          <button onClick={shareTwitter} title="Compartir en Twitter">
            <FaTwitter /> 
          </button>
          <button onClick={shareWhatsApp} title="Compartir en WhatsApp">
            <FaWhatsapp /> 
          </button>
          <button onClick={shareFacebook} title="Compartir en Facebook">
            <FaFacebookF />
          </button>
          <button onClick={shareTelegram} title="Compartir en Telegram">
            <FaTelegramPlane /> 
          </button>
          <button onClick={shareLinkedIn} title="Compartir en LinkedIn">
            <FaLinkedinIn />
          </button>
          <button onClick={shareReddit} title="Compartir en ReddIt">
            <FaReddit /> 
          </button>
        </div>
        </div>
      </blockquote>
  )
}

export default Quote

