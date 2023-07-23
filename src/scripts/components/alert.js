import { useState, useEffect } from "react";

export default function Alert({message, Alert}) {

    useEffect(() => {
        setTimeout(() => {
            Alert('', false);
        }, 4100);
    })

    return (
        <div className="alert">
            {message}
        </div>
    )

}
