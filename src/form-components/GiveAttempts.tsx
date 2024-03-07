import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remaining, setRemaining] = useState<number>(3);
    const [requested, setRequested] = useState<string>("0");
    const requestedAttempts = parseInt(requested) || 0;
    function use(): void {
        setRemaining(remaining - 1);
    }
    function gain(): void {
        setRemaining(remaining + requestedAttempts);
    }
    return (
        <div>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequested(event.target.value)
                    }
                />
            </Form.Group>
            <Button disabled={remaining === 0} onClick={use}>
                use
            </Button>
            <Button onClick={gain}>gain</Button>
            <div>{remaining}</div>
        </div>
    );
}
