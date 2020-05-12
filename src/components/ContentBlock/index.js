import React from "react";

import "./style.css";

export default function ContentBlock(props) {
    return (
        <div className="ContentBlock">
        {props.paragraphs.map(paragraph=><p key={paragraph.id}> {paragraph.content} </p>)}
        </div>
    )
}