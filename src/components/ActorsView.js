import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import '../App.css';

class ActorsComp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        result: '',
        card: false,
        sort: ''
    };
  }
  filterActor = (event) => {
    const inputStr = event.target.value;
    this.setState({
            result: inputStr,
            card: true,
            sort: ''
        });
    }
  getFilter = () => {
    const res = this.state.result;
    return res;
  }
  sortBy = (event) => {
    // console.log(event)
    console.log(event.target.value)
    // Use event handler to update the state
    const sorted = event.target.value;
    this.setState({
      result: '',
      card: false,
      sort: sorted
    }); 
  }
    render(){
        const actorCardInfo = [];
        const filteredActor =[];
        console.log(this.props.actors);
        if(this.state.sort === 'fname'){
          this.props.actors.sort(function (a, b) {
            var nameA = a.fname.toUpperCase(); // ignore upper and lowercase
            var nameB = b.fname.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });
          console.log(this.props.actors);
        }
        else if(this.state.sort === 'lname'){
          this.props.actors.sort(function (a, b) {
            var nameA = a.lname.toUpperCase(); // ignore upper and lowercase
            var nameB = b.lname.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });
          console.log(this.props.actors);
        }
        else if(this.state.sort === 'age'){
          this.props.actors.sort(function (a, b) {
            return Date.parse(b.birthday) - Date.parse(a.birthday);
          });
          console.log(this.props.actors);
        }
        for(let i=0; i<this.props.actors.length; i++) {
            const cardContent = <Col xs={6} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.props.actors[i]['image']}/>
              <Card.Body>
                 <Card.Title>{this.props.actors[i].fname} {this.props.actors[i]['lname']}</Card.Title>
                 <Card.Text>Age: {this.props.actors[i].age(this.props.actors[i]['birthday'])}</Card.Text>
                 <Card.Link href={this.props.actors[i].link}>IMDb Link</Card.Link>
              </Card.Body>
              </Card>
              </Col>
            // actorCardInfo.push(cardContent);
            console.log('boo', this.getFilter())
            if((this.props.actors[i].fname.includes(this.getFilter())) ||
              (this.props.actors[i].lname.includes(this.getFilter()))){
              filteredActor.push(cardContent);
              actorCardInfo.push(cardContent);
            }
            else{
              actorCardInfo.push(cardContent);
            }
        }
        return ( <div>
          <div className="inputFilter">
                <input onChange={this.filterActor} value={this.state.result} 
                    placeholder="Filter by Actor Name"/>
                {/* <p id="name">input value is: {this.state.result}</p> */}
          </div>
          <div className="sortBy">
            
            <select onChange={this.sortBy} name="actors" id="actors">
              <option value=""></option>
              <option value="fname">First Name</option>
              <option value="lname">Last Name</option>
              <option value="age">Age</option>
            </select>
            <label for="actors">Sort by:</label>
          </div>
          <div className="gallery">
            <Row>
                {this.state.card ? filteredActor : actorCardInfo}
                {/* {this.state.sort === 'age' ? filteredActor : actorCardInfo} */}
            </Row>
          </div>
        </div>
          )
     }
 }
 
 export default ActorsComp;