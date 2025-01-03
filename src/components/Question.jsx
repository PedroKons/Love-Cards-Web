/* eslint-disable react/prop-types */

const Question = ({ questionData, onChoice, isAnimating }) => {
  return (
    <div>
      <img
        src={questionData.svgOption1}
        alt="Opção 1"
        onClick={onChoice}
        className={`card ${isAnimating ? "card-out" : ""}`}
      />
    </div>
  );
};

export default Question;



