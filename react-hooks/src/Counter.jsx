import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementButton = () => {
        setCount(count + 1);
    };

    const decrementButton = () => {
        setCount(count - 1);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "300%",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "-15%",
            }}
        >
            Counter
            <div
                style={{
                    fontSize: "120%",
                    position: "relative",
                    top: "10vh",
                }}
            >
                {count}
            </div>
            <div className="buttons">
                <br/>
                <button
                    onClick={incrementButton}
                >
                    Increment
                </button>
                <button
                    onClick={decrementButton}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;