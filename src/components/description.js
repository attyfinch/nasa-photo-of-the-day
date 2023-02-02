import React, { useState, useEffect} from "react";

const Description = ({ title, exp, copyright, date }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Image by: {copyright}</p>
            <p>{exp}</p>
            <button>Get HD Version</button>
        </div>
    )
}

export default Description