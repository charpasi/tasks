import React, { useState } from "react";
import { Button } from "react-bootstrap";
React;
export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const reveal = () => setVisible(!visible);
    return (
        <div>
            <Button onClick={reveal}>Reveal Answer</Button>
            {visible && <div>42</div>}.
        </div>
    );
}
