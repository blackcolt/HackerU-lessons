import React, { Component } from "react";
import { Card } from "react-bootstrap";

class PlayerCard extends Component {
  state = {};
  render() {
    const style = { width: "18rem" };
    if (this.props.number > 10) {
      style.backgroundColor = "green";
    }
    return (
      <Card style={style}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>
            {this.props.name} | {this.props.number}
          </Card.Title>
          <Card.Text>
            {this.props.team} play as {this.props.position}
          </Card.Text>
          {this.props.single === true ? (
            <a href="/" className="button">
              Go home you are drunk
            </a>
          ) : (
            <a href={"/player?id=" + this.props.id} className="button">
              Go To Player Card
            </a>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default PlayerCard;
