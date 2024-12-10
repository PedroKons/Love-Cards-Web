import { useState } from "react";
import Question from "./components/Question";
import { shuffle } from "lodash";
import './styles/App.css';
import Drawer from './components/Drawer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComoJogar from "./pages/ComoJogar";


const questions = [
  {
    id: 1,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/1.svg?v=1733344129", // Caminho para o SVG da opção 1
    
  },
  {
    id: 2,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/2.svg?v=1733344129",
  },
  {
    id: 3,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/32.svg?v=1733344552",
  },
  {
    id: 4,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/33.svg?v=1733344552",
  },
  {
    id: 5,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/33.svg?v=1733344552",
  },
  {
    id: 6,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/9.svg?v=1733344552",
  },
  {
    id: 7,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/20.svg?v=1733344552",
  },
  {
    id: 8,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/19.svg?v=1733344552",
  },
  {
    id: 9,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/34.svg?v=1733344552",
  },
  {
    id: 10,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/29.svg?v=1733344552",
  },
  {
    id: 11,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/47.svg?v=1733344552",
  },
  {
    id: 12,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/52.svg?v=1733344552",
  },
  {
    id: 13,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/23.svg?v=1733344552",
  },
  {
    id: 14,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/10.svg?v=1733344552",
  },
  {
    id: 15,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/26.svg?v=1733344552",
  },
  {
    id: 16,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/24.svg?v=1733344552",
  },
  {
    id: 17,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/50.svg?v=1733344552",
  },
  {
    id: 18,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/6.svg?v=1733344552",
  },
  {
    id: 19,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/30.svg?v=1733344552",
  },
  {
    id: 20,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/28.svg?v=1733344552",
  },
  {
    id: 21,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/35.svg?v=1733344552",
  },
  {
    id: 22,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/3.svg?v=1733344553",
  },
  {
    id: 23,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/49.svg?v=1733344552",
  },
  {
    id: 24,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/25.svg?v=1733344552",
  },
  {
    id: 25,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/31.svg?v=1733344552",
  },
  {
    id: 26,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/22.svg?v=1733344552",
  },
  {
    id: 27,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/8.svg?v=1733344552",
  },
  {
    id: 28,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/54.svg?v=1733344552",
  },
  {
    id: 29,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/51.svg?v=1733344552",
  },
  {
    id: 30,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/36.svg?v=1733344552",
  },
  {
    id: 31,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/4.svg?v=1733344552",
  },
  {
    id: 32,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/11.svg?v=1733344552",
  },
  {
    id: 33,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/21.svg?v=1733344552",
  },
  {
    id: 34,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/7.svg?v=1733344552",
  },
  {
    id: 35,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/37.svg?v=1733344552",
  },
  {
    id: 36,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/27.svg?v=1733344552",
  },
  {
    id: 37,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/5.svg?v=1733344552",
  },
  {
    id: 38,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/48.svg?v=1733344552",
  },
  {
    id: 39,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/39.svg?v=1733344552",
  },
  {
    id: 40,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/53.svg?v=1733344552",
  },
  {
    id: 41,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/38.svg?v=1733344552",
  },
];

const cardsPremium = [
  {
    id: 1,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/premio-41.svg?v=1733857050"
  },

  {
    id: 2,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/premio-42.svg?v=1733857050"
  },

  {
    id: 3,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/premio-44.svg?v=1733857050"
  },

  {
    id: 4,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/premio-43.svg?v=1733857050"
  },

  {
    id: 5,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/premio-45.svg?v=1733857050"
  },

  {
    id: 6,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/premio-40.svg?v=1733857050"
  }
] 



const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [revealedCard, setRevealedCard] = useState(null);

  const shuffledCardsPremium = shuffle(cardsPremium);
  const shuffledQuestions = shuffle(questions);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsGameOver(true);
      }
      setIsAnimating(false);
    }, 700); // Duração da animação em milissegundos
  };

  const handleEndGame = () => {
    setIsGameOver(true);
  };

  const handleRevealCard = () => {
    setRevealedCard(shuffledCardsPremium[Math.floor(Math.random() * shuffledCardsPremium.length)]);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setIsGameOver(false);
    setRevealedCard(null);
    setIsAnimating(false);
  };


  return (
    <Router>
      <Drawer />
      <div className="container-logo">
        <img src="https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Icones_Canva.svg?v=1731609916" alt="logo" className="logo-svg"/>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container-app">
              {!isGameOver ? (
                <>
                  <Question
                    questionData={shuffledQuestions[currentQuestion]}
                    onChoice={handleNext}
                    isAnimating={isAnimating}
                  />
                  <div className="container-buttons">
                    <button onClick={handleNext} className="buttons-game">
                      Próximo
                    </button>
                    <button onClick={handleEndGame} className="buttons-game">
                      Finalizar
                    </button>
                  </div>
                </>
              ) : (
                <div>
                  <h2 className="title-close">Jogo Finalizado!</h2>
                  {revealedCard && (
                    <div>
                      <img
                        src={revealedCard.cardLink}
                        alt="Card Premium"
                        className="premium-card"
                      />
                    </div>
                  )}
                  <div className="container-buttons">
                    <button onClick={handleRevealCard} className="buttons-game">
                      Revelar Card Premium
                    </button>
                    <button onClick={handleRestart} className="buttons-game">
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
    </Router>
  );
};

export default App;
