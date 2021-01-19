import { Container, Jumbotron } from "react-bootstrap";

const HomeComp = function(){
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1 style={{ fontSize: '80px', fontFamily: 'cursive' }}>Movie app</h1>
                    <h1 style={{ fontFamily: 'cursive' }}>We ❤️ movies</h1>
                </Container>
            </Jumbotron>
        </div>
    )
}
export default HomeComp;