import React from "react";
import axios from "axios";
import './style.css';
import BooksCarousel from "./components/BooksCarousel";
import BookFormModal from "./components/BookFormModal";
import Button from "react-bootstrap/Button";
import { withAuth0 } from '@auth0/auth0-react';



class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  addBook = (event) => {
    event.preventDefault();

    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      state: event.target.state.value
    };

    console.log(obj);
    axios
      .post(`http://localhost:3010/addBooks`, obj)
      .then((result) => {
        return this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.handleClose();
  };

  deleteBook = (_id) => {
    axios
      .delete(`http://localhost:3010/deleteBooks/${_id}`)
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <Button
          type="button"
          class="btn btn-dark"
          variant="outline-secondary"
          size="lg"
          onClick={this.handleShow}>Add Book</Button>
        <BookFormModal
          show={this.state.show}
          handleClose={this.handleClose}
          addBook={this.addBook}
          handleOnChange={this.handleOnChange}
        />
        {
          this.state.books.length ? (
            <BooksCarousel
              books={this.state.books}
              deleteBook={this.deleteBook}
            />
          ) : (
            <h3>There are no books in the library</h3>
          )
        }
      </>
    )
  }
}
export default BestBooks;