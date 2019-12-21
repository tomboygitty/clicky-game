import React, {Component} from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import Navbar from '../Navbar';
import Header from '../Header';
import Button from '../Button';
import jojos from '../../jojos.json';
var tempJSON = [];

export default class Games extends Component {
 // Initialize state
    state = {
        currentScore: 0,
        topScore: 0,
        clickedArray: [],
        success: null
    };

    // Initialize buttons on load
    UNSAFE_componentWillMount() {
        this.randomizeJoJos();
    }

    // Randomize the contents of the JoJos JSON
    randomizeJoJos = () => {
        // Make a temp copy of the JoJos JSON
        tempJSON = jojos;

        // Randomize numbers 0-11
        var currentIndex = tempJSON.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle
        while (0 !== currentIndex) {
        
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element
            temporaryValue = tempJSON[currentIndex];
            tempJSON[currentIndex] = tempJSON[randomIndex];
            tempJSON[randomIndex] = temporaryValue;
        }
    }

    // Check the click against already clicked images to score, and then randomize again
    handleButtonClick = event => {
        // Capture ID of JoJo clicked
        const {id} = event.target;

        // If this JoJo hasn't been clicked before...
        if (this.state.clickedArray.indexOf(id) === -1){
            var tempClicked = this.state.clickedArray;
            tempClicked.push(id);
            // If currentScore equals topScore, increase both scores and push ID to clickedArray
            if (this.state.currentScore === this.state.topScore) {
                this.setState({
                    topScore: this.state.topScore + 1,
                    currentScore: this.state.currentScore + 1,
                    clickedArray: tempClicked,
                    success: true
                });
                console.log(this.state.success);
            }
            // Else, increase currentScore and push ID to clicked array
            else {
                this.setState({
                    currentScore: this.state.currentScore + 1,
                    clickedArray: tempClicked,
                    success: true
                });
                console.log(this.state.success);
            }
        }
        // Else, player loses; reset currentScore and clickedArray
        else {
            this.setState({
                currentScore: 0,
                clickedArray: [],
                success: false
            });
            console.log(this.state.success);
        }

        // Randomize JoJos again
        this.randomizeJoJos();
    }

    render() {
        return (
            <div>
                <Navbar
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                    success={this.state.success} />
                <Header />
                <Container className="justify-content-md-center">
                    <Row className="">
                        <Col className="col-2"></Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                                src={tempJSON[0].image}
                                name={tempJSON[0].name}
                                id={tempJSON[0].id}/>
                        </Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                                src={tempJSON[1].image}
                                name={tempJSON[1].name}
                                id={tempJSON[1].id}/>
                        </Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                            src={tempJSON[2].image}
                            name={tempJSON[2].name}
                            id={tempJSON[2].id}/>
                        </Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                            src={tempJSON[3].image}
                            name={tempJSON[3].name}
                            id={tempJSON[3].id}/>
                        </Col>
                        <Col className="col-2"></Col>
                    </Row>
                    <Row className="">
                        <Col className="col-2"></Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                            src={tempJSON[4].image}
                            name={tempJSON[4].name}
                            id={tempJSON[4].id}/>
                        </Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                            src={tempJSON[5].image}
                            name={tempJSON[5].name}
                            id={tempJSON[5].id}/>
                        </Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                            src={tempJSON[6].image}
                            name={tempJSON[6].name}
                            id={tempJSON[6].id}/>
                        </Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                            src={tempJSON[7].image}
                            name={tempJSON[7].name}
                            id={tempJSON[7].id}/>
                        </Col>
                        <Col className="col-2"></Col>
                    </Row>
                    <Row className="">
                        <Col className="col-2"></Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                            src={tempJSON[8].image}
                            name={tempJSON[8].name}
                            id={tempJSON[8].id}/>
                        </Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                            src={tempJSON[9].image}
                            name={tempJSON[9].name}
                            id={tempJSON[9].id}/>
                        </Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                            src={tempJSON[10].image}
                            name={tempJSON[10].name}
                            id={tempJSON[10].id}/>
                        </Col>
                        <Col className="col-2">
                            <Button handler={this.handleButtonClick}
                            src={tempJSON[11].image}
                            name={tempJSON[11].name}
                            id={tempJSON[11].id}/>
                        </Col>
                        <Col className="col-2"></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}