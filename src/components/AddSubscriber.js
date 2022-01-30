import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../UI/Button.css";
import "./AddSubscriber.css";
class AddSubscriber extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: "",
    };
  }
  onChangeHandler = (e) => {
    let sameCopyOfState = this.state;
    sameCopyOfState[e.target.name] = e.target.value;
    this.setState(sameCopyOfState);
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ id: 0, name: "", phone: "" });
    // this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Header heading="Add Subscriber" />
        <nav className="component-body-container ">
          <Link to="/">
            <button className="custom-btn">Back</button>
          </Link>
        </nav>
        <form className="subscriber-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="name" className="label-control">
            Name:{" "}
          </label>
          <br />
          <input
            className="input-control"
            type="text"
            name="name"
            id="name"
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <label htmlFor="phone" className="label-control">
            Phone:{" "}
          </label>
          <br />
          <input
            className="input-control"
            type="text"
            name="phone"
            id="phone"
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <div>
            <span className="subscriber-info-container">
              Subscriber to be added:
            </span>
            <br />
            <span className="subscriber-info">Name:{this.state.name}</span>
            <br />
            <span className="subscriber-info">Phone:{this.state.phone}</span>
            <br />
            <span>
              <button type="submit" className="custom-btn add-btn">
                ADD
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default AddSubscriber;
