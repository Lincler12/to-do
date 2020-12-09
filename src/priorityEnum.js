class priority {
  static get HIGH() {
    return {
      color: "red",
      value: 0,
      text: "High",
    };
  }
  static get MEDIUM() {
    return {
      color: "yellow",
      value: 1,
      text: "Medium",
    };
  }
  static get LOW() {
    return {
      color: "green",
      value: 2,
      text: "Low",
    };
  }
}

export { priority };
