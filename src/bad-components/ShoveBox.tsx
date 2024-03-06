import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}): JSX.Element {
    const handleClick = () => {
        setPosition(position + 4);
    };

    return <Button onClick={handleClick}>Shove the Box</Button>;
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    function MoveableBox(): JSX.Element {
        const [box, setBox] = useState<number>(position);
        return (
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: box + "px"
                }}
            ></div>
        );
    }
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton position={position} setPosition={setPosition} />
                <MoveableBox />
            </div>
        </div>
    );
}
