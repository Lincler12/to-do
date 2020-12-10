class priority {
  static get HIGH() {
    return {
      color: "#e53935", //redish
      value: 0,
      text: "high",
    };
  }
  static get MEDIUM() {
    return {
      color: "#FFB300", //yellowish
      value: 1,
      text: "medium",
    };
  }
  static get LOW() {
    return {
      color: "#43A047", //greenish
      value: 2,
      text: "low",
    };
  }
}

export { priority };
