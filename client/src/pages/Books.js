import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import GoogleBooksAPI from "../utils/GoogleBooksAPI";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks(term) {
    GoogleBooksAPI.get("/volumes", {params : {q : term}})
      .then(res => {
        console.log(res)
        setBooks(res.data.items)
      })
      // .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
        deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (searchTerm) {
      loadBooks(searchTerm);
    }
  };
  
  function handleSave(book) {
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    })
    .catch(err => console.log(err))
  };

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form onSubmit={handleFormSubmit}>
              <Input
                onChange={handleInputChange}
                name="title"
                value={searchTerm}
                placeholder="Title (required)"
              />
              <FormBtn
                text="Search"
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Results</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <div>
                      <Row>
                        <Col size="md-8"> 
                      <h3>{book.volumeInfo.title}</h3>
                      </Col>
                      <Col size="md-2">
                      <button className="button view" onClick={() => window.location.href=book.volumeInfo.infoLink}>view</button>
                      </Col>
                      <Col size="md-2">
                      <button className="button save" onClick={() => handleSave(book)} key={book.id}>save</button>
                      </Col>
                      </Row>
                      <Row>
                      {book.volumeInfo.authors.map(author => (
                        <h6>{author}</h6>
                      ))}
                      </Row>
                      <Row>
                        <Col size="md-3">
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                        </Col>
                        <Col size="md-9">
                        <div className="description">{book.volumeInfo.description}</div>
                        </Col>
                      </Row>
                                         </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
