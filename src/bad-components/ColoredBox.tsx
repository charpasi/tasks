import React, { useState } from "react";
import { Button } from "react-bootstrap";
React;
export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    function ChangeColor(): void {
        setColorIndex((colorIndex + 1) % COLORS.length);
    }

    function ColorPreview(): JSX.Element {
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[colorIndex],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        );
    }

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <Button onClick={ChangeColor}>Next Color</Button>
                <ColorPreview />
            </div>
        </div>
    );
}
