import { Component } from "react";
import Card from "../card/card.component.jsx";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;

// <div className="card-container" key={id}>
//               <img
//                 src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                 alt={`monster ${name}`}
//               />
//               <h2>{name}</h2>
//               <p>{email}</p>
//             </div>
