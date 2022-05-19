events:
onClick= {()=>console.log(111)}
onHover = {()=>console.log(1111)}
why we need to wrap it in another funciton?

state:
class component state
state = {
myText: "demo text"
};

whats the diffrent between a state and props?

import React, { Component } from "react";

class Cards extends Component {
state = {
cards: [
{ id: 1, title: "Card 1", article: "Text demo 1" },
{ id: 2, title: "Card 2", article: "Text demo 2" },
{ id: 3, title: "Card 3", article: "Text demo 3" }
]
};

render() {
return (

isntall bootstrap

<div className="container">
<div className="row">
{this.state.cards.map(card => (
<div className="col-12 mt-3" key={card.id}>
<div className="card">
<div className="card-body">
<h5 className="card-title">{card.title}</h5>
<p className="card-text">{card.article}</p>
</div>
</div>
</div>
))}
</div>
</div>
);
}
}

export default Cards;

display no users
    if (users.length === 0) return <p>No Users found...</p>;

<td>
                <button
                  onClick={() => this.removeUser(user.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>

hooks:
const [count, setCount] = setState(0)

webpack - bundling service (packing all of our files to one etc..)
state (for changing stuff)
props (just get it from the outside.)

children (all the element inside the component tag.)

state vs props (local vs public)
porps (read only)
