import React from "react";

import Card from "../components/Card";

import devgrub from "../assets/images/angular.png";
import youtube from "../assets/images/flask3.png";
import evverest from "../assets/images/Myself1.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Angular App",
          subTitle: "Still in deployment phase",
          imgSrc: devgrub,
          link:
            "https://github.com/weeshengchu/Angular-8-Spring-Boot---Todo-app",
          selected: false
        },
        {
          id: 1,
          title: "Flask Blog",
          subTitle: "To be used for Machine Learning",
          imgSrc: youtube,
          link: "https://flaskblogprojectapp.herokuapp.com/",
          selected: false
        },
        {
          id: 2,
          title: "Myself",
          subTitle: "Click below to track my github progress",
          imgSrc: evverest,
          link: "https://github.com/weeshengchu",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
