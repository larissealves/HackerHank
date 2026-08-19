import React, {useState} from "react";

function Slides({slides}) {

  const [showCurrentSlide, setShowCurrentSlide] = useState([slides[0]]);
  const [currentSlidePosition, setCurrentSlidePosition] = useState(0);

  const showNextSlide = () => {
    if (currentSlidePosition < slides.length - 1) {
      const slide = slides[currentSlidePosition + 1];

      setShowCurrentSlide([{
        ...slide,
      }]),

        setCurrentSlidePosition(currentSlidePosition + 1);
    }
  };

  const showPreviSlide = () => {
    if (currentSlidePosition > 0) {
      const slide = slides[currentSlidePosition - 1];

      setShowCurrentSlide([{
        ...slide,
      }]),

        setCurrentSlidePosition(currentSlidePosition - 1);
    }
  };

  const restartSlide = () => {
    setShowCurrentSlide([slides[0]]);
    setCurrentSlidePosition(0);
  }

  const habilitaBotaoNext =
    currentSlidePosition < slides.length - 1;

  const habilitaBotaoPrevious =
    currentSlidePosition > 0;

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined"
          disabled={!habilitaBotaoPrevious}
          onClick={restartSlide}
        >
          Restart
        </button>
        <button data-testid="button-prev" className="small"
          disabled={!habilitaBotaoPrevious}
          onClick={showPreviSlide}
        >
          Prev
        </button>
        <button data-testid="button-next" className="small"
          disabled={!habilitaBotaoNext}
          onClick={showNextSlide}
        >
          Next
        </button>
      </div>
      {showCurrentSlide.map(item => (
        <div id="slide" className="card text-center">
          <h1 data-testid="title">{item.title}</h1>
          <p data-testid="text">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Slides;
