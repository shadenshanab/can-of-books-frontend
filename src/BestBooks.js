import React from "react";
import axios from "axios";
import './style.css';
import BooksCarousel from "./components/BooksCarousel";
import BookFormModal from "./components/BookFormModal";
import UpdateBookModal from "./components/UpdateBookModal";

import Button from "react-bootstrap/Button";
import { withAuth0 } from '@auth0/auth0-react';



class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentBooks: {}
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
    const { user } = this.props.auth0;
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      state: event.target.state.value,
      name: user.email

    };

    console.log(obj);
    axios
      .post(`https://can-of.herokuapp.com/addBooks`, obj)
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
    const { user } = this.props.auth0;
    axios
      .delete(`https://can-of.herokuapp.com/deleteBooks/${_id}?name=${user.email}`)
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  updateBook = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;
    let obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      name: user.email

    }
    console.log(obj)
    const id = this.state.currentBooks._id;
    axios
      .put(`https://can-of.herokuapp.com/updateBooks/${id}`, obj)
      .then(result => {
        this.setState({
          books: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
    this.handleCloseUpdateModal();
  }

  handleShowUpdateModal = (item) => {
    this.setState({
      showFlag: true,
      currentBooks: item,
    });
  };

  handleCloseUpdateModal = () => {
    this.setState({
      showFlag: false,
    });
  };


  componentDidMount = () => {
    const { user } = this.props.auth0

    axios
      .get(`https://can-of.herokuapp.com/getBooks?name=${user.email}`)
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
          className="btn btn-dark"
          variant="outline-secondary"
          size="lg"
          onClick={this.handleShow}>Add Book</Button>
        <UpdateBookModal
          show={this.state.showFlag}
          handleCloseUpdate={this.handleCloseUpdateModal}
          handleShowUpdate={this.handleShowUpdateModal}
          updateBook={this.updateBook}
          currentBooks={this.state.currentBooks}
        />
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
export default withAuth0(BestBooks);