import { useState, useEffect } from "react";
import "./MoreDecks.css";
import Cookies from "js-cookie";

const MoreDecks = ({ onClose, onSelectDeck, currentDeckType, setShowCpfPopup, setCheckoutLink }) => {
    const [selectedTemplate, setSelectedTemplate] = useState(currentDeckType)
    const [loveCardsClassic, setLoveCardsClassic] = useState(true)
    const [loveCardsQuestion, setLoveCardsQuestion] = useState(true)

    useEffect(() => {
        const loveCardsClassic = Cookies.get("love-cards0")
        const loveCardsQuestion = Cookies.get("love-cards1")
        if (loveCardsClassic) {
          setLoveCardsClassic(false)
        }
        if (loveCardsQuestion) {
          setLoveCardsQuestion(false)
        } 
    }, [])

    useEffect(() => {
        setSelectedTemplate(currentDeckType);
    }, [currentDeckType]);

    const templates = [
      {
        id: "free",
        name: "Love Cards Clássico Free",
        description: "Versão gratuita do Love Cards Clássico",
        color: "pink",
        icon: "🫰",
        disabled: false,
      },
      {
        id: "classic",
        name: "Love Cards Clássico",
        description: "O tradicional jogo da cartas de casal",
        color: "pink",
        icon: "😍",
        disabled: loveCardsClassic,
        link: "BAUKPJCJU1"
      },
      {
        id: "question",
        name: "Love Cards Question",
        description: "Novidade! O jogo de cartas de casal com perguntas e respostas",
        color: "pink",
        icon: "❔",
        disabled: loveCardsQuestion,
        link: "KFLKZZ0F1P"
      },
    ]

    const handlePlay = () => {
      onSelectDeck(selectedTemplate);
      onClose();
    }
  
    return (
      <div className="template-selector">
        <div className="template-header">
          <div className="template-title-container">
            <h2 className="template-title">Escolha um tipo de jogo</h2>
          </div>
          <p className="template-subtitle">Selecione o deck de cartas mais apropriado para você e seu parceiro</p>
        </div>
  
        <div className="template-options">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                if (template.disabled) {
                  setCheckoutLink(template.link);
                  setShowCpfPopup(true);
                  onClose();
                }
              }}
            >
              <div
                className={`template-option ${selectedTemplate === template.id ? `selected ${template.color}` : ""} ${template.disabled ? "disabled" : ""}`}
                onClick={(e) => {
                  if (!template.disabled) {
                    e.stopPropagation();
                    setSelectedTemplate(template.id);
                  }
                }}
              >
                <div className="template-option-content">
                  <div className="radio-container">
                    <div className={`radio-button ${selectedTemplate === template.id ? "checked" : ""}`}/>
                  </div>
  
                  <div className="template-details">
                    <div className="template-name-container">
                      <div className={`icon-container ${template.color}`}>
                        <div className="icon">{template.icon}</div>
                      </div>
                      <span className="template-name">{template.name}</span>
                    </div>
                    <p className="template-description">{template.description}</p>
                  </div>
                  {template.disabled && <span className="template-name template-buy">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>  
                  </span>}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="template-actions">
          <button className="buttons-game" onClick={onClose}>Cancelar</button>
          <button className="buttons-game" onClick={handlePlay}>Jogar</button>
        </div>
      </div>
    )
}

export default MoreDecks;