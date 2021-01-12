import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class ActorsComp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const actorCardInfo = [];
        console.log(this.props.actors);
        for(let i=0; i<this.props.actors.length; i++) {
            const cardContent = <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.props.actors[i]['image']}/>
              <Card.Body>
                 <Card.Title>{this.props.actors[i].fname} {this.props.actors[i]['lname']}</Card.Title>
                 <Card.Text>Age: {this.props.actors[i].age(this.props.actors[i]['birthday'])}</Card.Text>
                 <Card.Link href={this.props.actors[i].link}>IMDb Link</Card.Link>
              </Card.Body>
              </Card>
            actorCardInfo.push(cardContent);
        }
        return ( <div>
          <CardDeck>
              {actorCardInfo}
          </CardDeck>
        </div>
          )
     }
 }
 
 export default ActorsComp;