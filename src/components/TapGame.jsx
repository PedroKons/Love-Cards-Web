import "./TapGame.css";

const TapGame = ({ onTap }) => {
  return (
    <div className="container-tap-game" onClick={onTap}>
        <p>Toque para jogar</p>
    </div>
  )
}

export default TapGame