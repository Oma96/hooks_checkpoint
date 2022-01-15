import React from 'react'
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap'

function MovieCard({movie}) {
    return (
        <div>





  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.image} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    {movie.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{movie.rate}</ListGroupItem>
   
  </ListGroup>
 
</Card>
            
           
        </div>
    )
}

export default MovieCard
