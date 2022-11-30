const keywordDifficulty = function (value: number) {
  if (value > 85) {
    return {
      rating: "Very hard",
      color: "#D1002F",
    };
  } else if (value >= 70) {
    return {
      rating: "Hard",
      color: "#FF4953",
    };
  } else if (value >= 50) {
    return {
      rating: "Difficult",
      color: "#FF8C43",
    };
  } else if (value >= 30) {
    return {
      rating: "Possible",
      color: "#FDC23C",
    };
  } else if (value >= 15) {
    return {
      rating: "Easy",
      color: "#59DDAA",
    };
  } else {
    return {
      rating: "Very easy",
      color: "#009F81",
    };
  }
};

export default keywordDifficulty;
