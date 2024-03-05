import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const removeAttempt = () => {
        setAttempts(attempts - 1);
    };
    const addAttempt = () => {
        setAttempts(attempts + 1);
    };
    const [inProgress, setInProgress] = useState<boolean>(false);
    const changeInProgress = () => {
        setInProgress(!inProgress);
    };
    return (
        <div>
            <Button
                onClick={() => {
                    removeAttempt();
                    changeInProgress();
                }}
                disabled={inProgress === true || attempts === 0}
            >
                Start Quiz
            </Button>
            {attempts}
            <Button
                onClick={() => changeInProgress()}
                disabled={inProgress === false}
            >
                Stop Quiz
            </Button>
            {attempts}
            <Button
                disabled={inProgress === true}
                onClick={() => {
                    addAttempt();
                }}
            >
                Mulligan
            </Button>
            {attempts}
        </div>
    );
}
