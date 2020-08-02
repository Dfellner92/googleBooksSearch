import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import savedBookWrapper from "../components/savedBookWrapper";
// import DataMainBody from "../components/DataMainBody";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";




function Detail() {
  const [books, setbooks] = useState([])
  // const [searchTerm, setSearchTerm] = useState("")

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  useEffect(() => {


    API.getBooks()
      .then(res => {
        console.log(res.data);
        setbooks(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  function deleteBook(id) {
    deleteBook(id)
  .then(res => useEffect)
  .catch(err => console.log(err));
  }



  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              by
              </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Synopsis</h1>
            <p>
            
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <div>
                      <h3>{book.title}</h3>
                      {book.authors.map(author => (
                        <h6>{author}</h6>
                      ))}
                      <img src={book.image} alt={book.title}></img>
                      {/* <button className="saveButton" onClick={() => handleSave(book)} key={book.id}>
                        <Link to={"/books"}>
                          <strong>
                            save book 
                          </strong>
                        </Link>
                      </button> */}
                    </div>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          {/* <div className="data-area">
            {Book.map(book =>(
              <savedBookWrapper
                    key={book._id}
                    _id={book._id}
                    authors={book.authors ? book.authors : ["No Author Available"]}
                    title={book.title}
                    description={book.description ? book.description : "No Description Available"}
                    link={book.link}
                    image={book.image ? book.image : "#"}                   
                     />
                     ))}
          </div> */}
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;
