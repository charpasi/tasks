import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [username, setUsername] = useState<string>("Your Name");
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    return (
        <div>
            <Form.Switch
                type="switch"
                id="is-editing-check"
                label="Editing?"
                checked={editing}
                onChange={updateEditing}
            />
            {editing && (
                <Form.Check
                    type="checkbox"
                    id="is-student"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            )}
            <div>
                {editing && (
                    <Form.Group controlId="username">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={username}
                            onChange={updateName}
                            disabled={!isStudent}
                        />
                    </Form.Group>
                )}
                {((editing && isStudent) || isStudent) &&
                    username + " is a student"}
                {((!editing && !isStudent) || !isStudent) &&
                    username + " is not a student"}
            </div>
        </div>
    );
}
