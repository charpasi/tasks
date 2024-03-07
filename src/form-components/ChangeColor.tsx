import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "cyan",
    "pink"
];
export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(COLORS[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }
    function ColorPreview(): JSX.Element {
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: chosenColor,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            >
                <span style={{ color: chosenColor }}>{chosenColor}</span>
            </div>
        );
    }
    return (
        <div>
            <h3>Change Color</h3>
            <span>
                The chosen color is:{" "}
                <span style={{ color: chosenColor }}>{chosenColor}</span>
            </span>
            <Form.Group controlId="favoriteColors">
                <Form.Label>Choose a color </Form.Label>
                {COLORS.map((colorName: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        label={colorName}
                        name={colorName}
                        id={colorName}
                        checked={chosenColor === colorName}
                        key={colorName}
                        value={colorName}
                        onChange={updateColor}
                    ></Form.Check>
                ))}
            </Form.Group>
            {chosenColor && <ColorPreview />}
        </div>
    );
}
