import  { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Render");
    return <h1>Hello, React!</h1>;
  }
}

export default App;