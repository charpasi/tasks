import React, { useState } from "react";
import { Button } from "react-bootstrap";
React;
export function CycleHoliday(): JSX.Element {
    type Holiday = "🎉" | "💞" | "🎃" | "🦃" | "🎄";
    const [holiday, setHoliday] = useState<Holiday>("🎉");
    const chronological: Record<Holiday, Holiday> = {
        "🎉": "💞",
        "💞": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🎉"
    };
    function nextChronological(): void {
        const newHoliday = chronological[holiday];
        setHoliday(newHoliday);
    }
    const alphabetical: Record<Holiday, Holiday> = {
        "🎄": "🎃",
        "🎃": "🎉",
        "🎉": "🦃",
        "🦃": "💞",
        "💞": "🎄"
    };
    function nextAlphabet(): void {
        const newHoliday = alphabetical[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            Cycle Holiday
            <Button
                onClick={() => {
                    nextAlphabet();
                }}
            >
                Advance by Alphabet
            </Button>
            {"Holiday: " + holiday}
            <Button
                onClick={() => {
                    nextChronological();
                }}
            >
                Advance by Year
            </Button>
            {"Holiday: " + holiday}
        </div>
    );
}
