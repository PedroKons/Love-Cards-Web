/* eslint-disable react/prop-types */
import './PopUp.css';
import './EmailPopUp.css'

const EmailPopUp = ({ email, setEmail, onConfirm, isLoading, emailSent }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <h3>Para continuar jogando insira seu e-mail</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
          <div className="popup-buttons">
            <button 
              onClick={onConfirm} 
              className={`buttons-game ${emailSent === true ? 'button-success' : emailSent === false ? 'button-error' : ''}`} 
              disabled = {isLoading}>
              {isLoading ? <span className="spinner"></span> : 'Enviar'}
            </button>
          </div>
          {emailSent === false && (
            <p className="error-message">Erro ao enviar o e-mail. Tente novamente.</p>
          )}
        </div>        
      </div>
    );
  };
  
  export default EmailPopUp;