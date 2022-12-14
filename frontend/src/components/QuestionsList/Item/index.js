import React from "react";
import {Link} from "react-router-dom";
import {Button} from "../../Button";
import {EditIcon} from "../../icons/Edit";
import {DeleteIcon} from "../../icons/Delete";

export const Item = ({index, title, answer, id, onDeleteQuestion}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{title}</td>
            <td>{answer}</td>
            <td style={{ border: 'none' }}>
                <Link to={`/edit/${id}`}>
                    <Button color={'blue'} text={'Edit'}>
                        <EditIcon />
                    </Button>
                </Link>
                <div
                    style={{
                        marginLeft: 5,
                        display: 'inline-block'
                    }}
                    onClick={() => onDeleteQuestion(id)}>
                    <Button text={'Remove'} color={'orange'}>
                        <DeleteIcon />
                    </Button>
                </div>
            </td>
        </tr>
    )
}
