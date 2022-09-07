import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import './style.css';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3010/getBooks")
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((item) => {
              return (
                <Carousel.Item
                style={{height: 690 }}
                >
                  <img
                    className="d-block w-100"
                    src="https://images8.alphacoders.com/502/502079.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.state}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            }
            )
            }
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;