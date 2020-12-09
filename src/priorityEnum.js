class priority {
  static get HIGH() {
    return {
      color: "red",
      value: 0,
      text: "high",
    };
  }
  static get MEDIUM() {
    return {
      color: "yellow",
      value: 1,
      text: "medium",
    };
  }
  static get LOW() {
    return {
      color: "green",
      value: 2,
      text: "low",
    };
  }
}

export { priority };
