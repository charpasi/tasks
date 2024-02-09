import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>Task 3</h1>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>Charmaine</p>
            <p>Hello World!</p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: "200px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: "200px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <img
                            alt="A picture of my dog Mickey"
                            width="531"
                            height="537"
                            src={require("/Users/charmainepasicolan/tasks/src/images/mickey.png")}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
