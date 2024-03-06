import React, { useState } from "react";
import { Button } from "react-bootstrap";
React;
export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            to {value}.
        </span>
    );
}
