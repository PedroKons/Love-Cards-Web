/* eslint-disable react/prop-types */
import './PopUp.css';

import { useState } from 'react';

const CodePopUp = ({ onVerifyCode, onClose, isLoading, responseMessageCpf }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerifyCode(code);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>{responseMessageCpf}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o código"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <div className='popup-buttons'>
            <button type="submit" disabled={isLoading} className='buttons-game'>
              {isLoading ? 'Verificando...' : 'Validar Código'}
            </button>
            <button type="button" onClick={onClose} className="close-button">
            ✖
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CodePopUp;
