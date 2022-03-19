import React, {useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

let Counter = () => {

    let [state , setState] = useState({
        count : 0
    });

    let incr = () => {
        setState({
            count: state.count + 1
        });
    };

    let decr = () => {
        setState({
            count: state.count - 1
        });
    };

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Body>
                                <p className="display-2">{state.count}</p>
                                <Button onClick={incr} variant="success" className="m-1">Increment</Button>
                                <Button onClick={decr} variant="warning" className="m-1">Increment</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};
export default Counter;