/* eslint-disable react/prop-types */
import './PopUp.css';

const PopUp = ({ cpf, setCpf, onVerify, onClose, isVerified, isLoading }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
        ✖
        </button>
        <h3>Não pare por aqui! 💬</h3>
        <br />
        <p>As cartas gratuitas acabaram, mas o jogo completo está cheio de novas descobertas e momentos únicos para você e seu parceiro(a).</p>
        <br />
        <p className='text-complementary'>🔓 Liberte todo o potencial do jogo!</p>
        <p className='text-complementary'>👉 Compre agora ou faça login com o CPF da compra.</p>
        <br />
        <a className="buttons-game button-pop-up-validation" href='https://seguro.lovechocolate.com.br/r/BAUKPJCJU1'>
            Comprar
        </a>
        <p className='label-input'>Faça login com CPF usado na compra:</p>
        <input
          className='teste'
          type="text"
          placeholder="Digite seu CPF ex: 12345678900"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <div className="popup-buttons">
          <button onClick={onVerify} className="buttons-game" disabled = {isLoading}>
            {isLoading ? <span className="spinner"></span> : 'Verificar'}
          </button>
        </div>
        {isVerified === false && <p className="error">Pagamento não verificado ou CPF Inválido</p>}
        {isVerified === true && <p className="success">Pagamento Verificado!</p>}
      </div>
    </div>
  );
};

export default PopUp;