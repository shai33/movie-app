import { Card } from "react-bootstrap"

const MovieCard = function(props){
    const {movieName, movieLength, moviePoster} = props
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{movieName}</Card.Title>
                <Card.Text>Length in minutes: {movieLength}</Card.Text>
                <Card.Img variant="top" src={moviePoster}/>
            </Card.Body>
        </Card>
    )
}

export default MovieCard