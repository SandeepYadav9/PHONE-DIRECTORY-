import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../UI/Button.css";
import "./ShowSubscriber.css";
class ShowSubscriber extends Component {
  constructor(params) {
    super();
    this.state = {
      subscribersList: [
        {
          id: 1,
          name: "Shilpa Bhat",
          phone: "9999999999",
        },
        {
          id: 2,
          name: "Srishti Gupta",
          phone: "8888888888",
        },
      ],
    };
  }
  onDeletedClick = (id) => {
    let copyOfSubscriberList = [...this.state.subscribersList];

    let updateState = copyOfSubscriberList.filter((copy) => copy.id !== id);
    this.setState({ subscribersList: updateState });
  };
  render() {
    return (
      <div>
        <Header heading="Phone Directory" />
        <nav className="component-body-container">
          <Link to="/Add">
            <button className="custom-btn add-btn">Add</button>
          </Link>
        </nav>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item  phone-heading">Phone</span>
        </div>
        {this.state.subscribersList.map((sub) => {
          return (
            <div key={sub.id} className="grid-container">
              <span className="grid-item ">{sub.name}</span>
              <span className="grid-item ">{sub.phone}</span>
              <span className="grid-item  action-btn-container">
                <button
                  className="custom-btn delete-btn"
                  onClick={() => {
                    this.onDeletedClick(sub.id);
                  }}
                >
                  Delete
                </button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShowSubscriber;
