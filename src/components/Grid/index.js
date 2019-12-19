import React, {Component} from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import Button from '../Button';
import jojos from '../../jojos.json';
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default class Grid extends Component {
    // Initialize state
    state = {
        score: 0,
        clickedArray: []
    };

    // Initialize buttons on load
    componentWillMount() {
        this.loadButtons();
    }

    // Randomize the locations of each button
    loadButtons = () => {
        // Randomize numbers 0-11
        var currentIndex = numArray.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = numArray[currentIndex];
            numArray[currentIndex] = numArray[randomIndex];
            numArray[randomIndex] = temporaryValue;
        }
        console.log(numArray);
    }

    // Check the click against already clicked images to score, and then randomize again
    handleButtonClick = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });

        // this.state.clickedArray.map(
        //     button => ();
        // )

        this.loadButtons();
    }

    render() {
        return (
            <Container className="justify-content-md-center">
                <Row className="">
                    <Col className="col-2"></Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[0]].image} name={jojos[numArray[0]].name} id="button-1"/>
                    </Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[1]].image} name={jojos[numArray[0]].name} id="button-2"/>
                    </Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[2]].image} name={jojos[numArray[0]].name} id="button-3"/>
                    </Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[3]].image} name={jojos[numArray[0]].name} id="button-4"/>
                    </Col>
                    <Col className="col-2"></Col>
                </Row>
                <Row className="">
                    <Col className="col-2"></Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[4]].image} name={jojos[numArray[0]].name} id="button-5"/>
                    </Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[5]].image} name={jojos[numArray[0]].name} id="button-6"/>
                    </Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[6]].image} name={jojos[numArray[0]].name} id="button-7"/>
                    </Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[7]].image} name={jojos[numArray[0]].name} id="button-8"/>
                    </Col>
                    <Col className="col-2"></Col>
                </Row>
                <Row className="">
                    <Col className="col-2"></Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[8]].image} name={jojos[numArray[0]].name} id="button-9"/>
                    </Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[9]].image} name={jojos[numArray[0]].name} id="button-10"/>
                    </Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[10]].image} name={jojos[numArray[0]].name} id="button-11"/>
                    </Col>
                    <Col className="col-2">
                        <Button src={jojos[numArray[11]].image} name={jojos[numArray[0]].name} id="button-12"/>
                    </Col>
                    <Col className="col-2"></Col>
                </Row>
            </Container>
        )
    }
}
