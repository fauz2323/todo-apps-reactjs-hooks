import React, { useState } from "react";
import Tests from "../card";

const ChildProduct = () => {

    const [getData, setData] = useState(1);

    const counterHandlerChange = (newVal) => {
        setData(newVal)
    }

    return (
        <div>
            <div className="container">
                <div className="text-large">{getData}</div>
            </div>
            <Tests onHandlerChange={(value) => counterHandlerChange(value)} />
        </div>
    )
}

export default ChildProduct;