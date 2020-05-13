import React from "react";

import "./style.css";

export default function ListCard(props) {
    return (
        <div className="ListCard card">
            <div className="card-header"> {props.data.header} </div>
            <div className="card-body">
                <ul>
                    {props.data.list.map(item => <li key={item.id}> {item.content} </li>)}
                </ul>
            </div>
            <div className="card-footer"><span className="text-muted"></span></div>
        </div>
    )
}