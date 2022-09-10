import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

class BooksCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                {this.props.books.map((item) => {
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images8.alphacoders.com/502/502079.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>{item.state}</p>
                                <Button
                                    className='button'
                                    variant="light"
                                    onClick={() => this.props.deleteBook(item._id)}
                                >
                                    Delete Book
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                }
                )
                }
            </Carousel>
        )
    }
}

export default BooksCarousel;
