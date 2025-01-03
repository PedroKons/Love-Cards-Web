import { useState, useEffect } from "react";
import Question from "./components/Question"; // Importa o componente de exibição Perguntas/Cartas.
import { shuffle } from "lodash"; // Importa a função shuffle para embaralhar arrays.
import './styles/App.css'; // Importa os estilos CSS.
import Drawer from './components/Drawer' // Importa o componente Drawer.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa componentes para criar rotas.
import ComoJogar from "./pages/ComoJogar"; // Importa a pagina de Como Jogar.
import PopUp from './components/PopUp'; // Importa o componente de PopUp.
import EmailPopUp from "./components/EmailPopUp";
import Login from "./components/Login";
import Cookies from 'js-cookie';
import CodePopUp from "./components/CodePopUp";

// Array com as perguntas/cartas Premium.
const cardsPremium = [
  {
    id: 1,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_163.svg?v=1734462157"
  },

  {
    id: 2,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_162.svg?v=1734462157"
  },

  {
    id: 3,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_159.svg?v=1734462157"
  },

  {
    id: 4,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_158.svg?v=1734462157"
  },

  {
    id: 5,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_161.svg?v=1734462157"
  },

  {
    id: 6,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_160.svg?v=1734462157"
  }
] 

const deckFree = [
  {
    id: 1,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_167.svg?v=1734462158",
  },
  {
    id: 2,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_176.svg?v=1734462158",
  },
  {
    id: 3,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_154.svg?v=1734462157",
  },
  {
    id: 4,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_157.svg?v=1734462157",
  },
  {
    id: 5,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_144.svg?v=1734462157",
  }
];

const deckPaid = [
  {
    id: 1,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_152.svg?v=1734462157"
  },

  {
    id: 2,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_156.svg?v=1734462157"
  },

  {
    id: 3,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_142.svg?v=1734462157"
  },

  {
    id: 4,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_141.svg?v=1734462157"
  },

  {
    id: 5,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_143.svg?v=1734462157"
  },

  {
    id: 6,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_155.svg?v=1734462157"
  },

  {
    id: 7,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_153.svg?v=1734462157"
  },

  {
    id: 8,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_184.svg?v=1734462157"
  }, 

  {
    id: 9,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_147.svg?v=1734462157"
  },

  {
    id: 10,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_150.svg?v=1734462157"
  },

  {
    id: 11,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_146.svg?v=1734462157"
  },

  {
    id: 12,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_144.svg?v=1734462157"
  },

  {
    id: 13,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_174.svg?v=1734462157"
  },

  {
    id: 14,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_175.svg?v=1734462157"
  },

  {
    id: 15,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_178.svg?v=1734462157"
  },

  {
    id: 16,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_140.svg?v=1734462157"
  },

  {
    id: 17,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_149.svg?v=1734462157"
  },

  {
    id: 18,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_157.svg?v=1734462157"
  },

  {
    id: 19,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_164.svg?v=1734462157"
  },

  {
    id: 20,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_185.svg?v=1734462157"
  },

  {
    id: 21,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_183.svg?v=1734462157"
  },

  {
    id: 22,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_154.svg?v=1734462157"
  },

  {
    id: 23,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_180.svg?v=1734462157"
  },

  {
    id: 24,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_151.svg?v=1734462157"
  },

  {
    id: 25,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_169.svg?v=1734462157"
  },

  {
    id: 26,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_145.svg?v=1734462158"
  },

  {
    id: 27,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_179.svg?v=1734462157"
  },

  {
    id: 28,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_182.svg?v=1734462157"
  },

  {
    id: 29,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_168.svg?v=1734462157"
  },

  {
    id: 30,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_148.svg?v=1734462157"
  },

  {
    id: 31,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_181.svg?v=1734462157"
  },

  {
    id: 32,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_171.svg?v=1734462157"
  },

  {
    id: 33,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_172.svg?v=1734462157"
  },

  {
    id: 34,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_177.svg?v=1734462157"
  },

  {
    id: 35,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_165.svg?v=1734462158"
  },

  {
    id: 36,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_166.svg?v=1734462158"
  },

  {
    id: 37,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_173.svg?v=1734462158"
  },

  {
    id: 38,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_176.svg?v=1734462158"
  },

  {
    id: 39,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_170.svg?v=1734462158"
  },

  {
    id: 40,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_167.svg?v=1734462158"
  },

];

const App = () => {
  // Estados para controlar o fluxo e a interação do jogo.
  const [currentDeck, setCurrentDeck] = useState(shuffle(deckFree));
  const [currentQuestion, setCurrentQuestion] = useState(0); // Guarda a carta atual.
  const [isAnimating, setIsAnimating] = useState(false); // Controla se a animação está ocorrendo.
  const [isGameOver, setIsGameOver] = useState(false); // Indica que o jogo terminou.
  const [revealedCard, setRevealedCard] = useState(null); // Armazena o card premium revelado.
  const [showEmailPopup, setShowEmailPopup] = useState(false); // Controla se o pop-up de email deve abrir. 
  const [showCpfPopup, setShowCpfPopup] = useState(false);
  const [email, setEmail] = useState(''); // Armazena o email do usuário.
  const [cpf, setCpf] = useState('');
  const [isVerified, setIsVerified] = useState(null); // Indica se o pagamento foi verificado.
  const [emailSent, setEmailSent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailCookie, setEmailCookie] = useState(false);
  const [showCodePopUp, setShowCodePopUp] = useState(false);
  const [messageResponseCpf, setMessageResponseCpf] = useState('');

  useEffect(() => {
    if (Cookies.get('isLoggedIn') === 'true') {
      setIsVerified(true);
      setCurrentDeck(shuffle(deckPaid));
    }

    const savedEmail = Cookies.get('userEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setEmailCookie(true);
    }
  }, []);

  // Função para logout
  const handleLogout = () => {
    Cookies.remove('isLoggedIn'); // Remove o cookie
    setIsVerified(false);
    setCurrentDeck(shuffle(deckFree));
  };

  // Embaralha os Arrays.
  const shuffledCardsPremium = shuffle(cardsPremium); 

  // Função que avança para próxima carta.
  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (!emailCookie && !isVerified && !emailSent && (currentQuestion + 1) % 2 === 0) {
        setShowEmailPopup(true);
      }
      // Se o pagamento foi verificado, pula o if das 5 cartas
      if (!isVerified && (currentQuestion + 1) % 5 === 0) {
        setShowCpfPopup(true); // Mostra o pop-up apenas se o pagamento não foi verificado
      } else {
        if (currentQuestion < currentDeck.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setIsGameOver(true);
        }
      }
      setIsAnimating(false);
    }, 700);
  };

  const handleEmailSubmission = async () => {
    setIsLoading(true);
    setEmailSent(null);

    try {
      
      const response = await fetch('https://lovesite.lovechocolate.com.br/love-cards/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Envia o e-mail no corpo da requisição.
      });

      if (response.ok) {
        Cookies.set('userEmail', email, { expires: 30 });
        setTimeout(() => {
          setShowEmailPopup(false);
        }, 1000);
        setEmailSent(true);
        // grva cookie 
      } else {
        setEmailSent(false);
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      alert('Erro ao enviar o e-mail. Tente novamente.');
      setEmailSent(false);
    } finally {
      setIsLoading(false);
    }
  };
  // Função para verificar o pagamento através de uma API.
  const handleCpfVerification = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://lovesite.lovechocolate.com.br/love-cards/request-code?cpf=${cpf}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      // Verifica se o pagamento está OK.
      if (response.ok) {
        Cookies.set('isLoggedIn', 'true', { expires: 1 });
        setMessageResponseCpf(data.message);
        setTimeout(() => {
          setShowCpfPopup(false); // Fecha o Pop-up.
        }, 1000);
        setShowCodePopUp(true);
      } else {
        setIsVerified(false); // Define que o pagamento não foi verificado.
      }
    } catch (error) {
      console.error('Erro ao verificar pagamento:', error); // Mostra o erro no console.
      setIsVerified(false); // Define que o pagamento não foi verificado.
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeValidation = async (code) => {
    setIsLoading(true);
  
    try {
      const response = await fetch(`https://lovesite.lovechocolate.com.br/love-cards/validate-code?cpf=${cpf}&code=${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        Cookies.set('isLoggedIn', 'true', { expires: 1 });
        setIsVerified(true);
        setTimeout(() => {
          setShowCodePopUp(false);
        }, 1000);
        setShowCodePopUp(false);
        setCurrentDeck(shuffle(deckPaid));
        setCurrentQuestion(0);
      } else {
        const errorData = await response.json();
        alert(errorData.detail || 'Código inválido ou expirado.');
        setIsVerified(false);
      }
    } catch (error) {
      console.error('Erro ao validar o código:', error);
      setIsVerified(false);
      alert('Erro ao validar o código. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowCpfPopup = () => {
    setCpf('');
    setShowCpfPopup(true);
  };

  const handleResetGame = () => {
    setCurrentDeck(isVerified ? shuffle(deckPaid) : shuffle(deckFree));
    setCurrentQuestion(0);
    setIsGameOver(false);
    setRevealedCard(null);
  };

  return (
    <Router>
      <Drawer />
      <div className="container-logo">
        <img
          src="https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Icones_Canva.svg?v=1731609916"
          alt="logo"
          className="logo-svg"
        />
        {!isVerified && (
          <Login
            clickLogin={handleShowCpfPopup}
            text={"Entrar"}
          />
        )}
        {isVerified && (
          <Login
            clickLogin={handleLogout}
            text={"Sair"}
          />
        )}
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container-app">
              {!isGameOver ? (
                <>
                  <Question
                    questionData={currentDeck[currentQuestion]}
                    onChoice={handleNext}
                    isAnimating={isAnimating}
                  />
                  <div className="container-buttons">
                    <button onClick={handleNext} className="buttons-game">
                      Próximo
                    </button>
                    <button onClick={() => setIsGameOver(true)} className="buttons-game">
                      Finalizar
                    </button>
                  </div>
                </>
              ) : (
                <div>
                  <h2 className="title-close">Jogo Finalizado!</h2>
                  {revealedCard && (
                    <div>
                      <img src={revealedCard.cardLink} alt="Card Premium" className="premium-card" />
                    </div>
                  )}
                  <div className="container-extra">
                    <button
                      onClick={() => {
                        if (isVerified) {
                          setRevealedCard(shuffledCardsPremium[0]);
                        } else {
                          setShowCpfPopup(true);
                        }
                      }}
                      className="buttons-game"
                    >
                      Revelar Card Premium
                    </button>
                    <button onClick={handleResetGame} className="buttons-game">
                      Reiniciar Jogo
                    </button>
                  </div>
                </div>
              )}
            </div>
          }
        />
        <Route path="/como-jogar" element={<ComoJogar />} />
      </Routes>

      {showCpfPopup && (
        <PopUp
          cpf={cpf}
          setCpf={setCpf}
          onVerify={handleCpfVerification}
          onClose={() => setShowCpfPopup(false)}
          isVerified={isVerified}
          isLoading = {isLoading}
        />
      )}

      {showEmailPopup && (
        <EmailPopUp
          email = {email}
          setEmail = {setEmail}
          onConfirm = {handleEmailSubmission}
          isLoading = {isLoading}
          emailSent = {emailSent}
        />
      )}

      {showCodePopUp && (
        <CodePopUp
          cpf={cpf}
          onVerifyCode={handleCodeValidation}
          onClose={() => setShowCodePopUp(false)}
          isLoading={isLoading}
          message={isVerified ? "Código validado com sucesso!" : "Código inválido ou expirado."}
          responseMessageCpf = {messageResponseCpf}
        />
      )}
    </Router>
  );
};

export default App;
