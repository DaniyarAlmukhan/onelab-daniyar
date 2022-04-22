import { Component } from "react";

export class CounterClass extends Component {
  state = {
    counter: 0,
  };

  addHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  subHandler = () => {
    this.state.counter > 0 &&
      this.setState({ counter: this.state.counter - 1 });
  };
  resetHandler = () => {
    this.setState({ counter: 0 });
  };
  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ counter: +e.currentTarget.value });
  };

  render() {
    return (
      <>
        <h1>Class Component</h1>
        <div>{this.state.counter}</div>
        <button onClick={this.addHandler}>+</button>
        <button onClick={this.subHandler}>-</button>
        <button onClick={this.resetHandler}>Reset</button>
        <input type="number" defaultValue={0} onChange={this.changeHandler} />
      </>
    );
  }
}

export default CounterClass;
