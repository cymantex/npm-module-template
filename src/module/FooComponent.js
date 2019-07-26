import React from "react";
import {useFoo} from "./useFoo";
import "./foo.scss";

export const FooComponent = () => {
    const {foo, onFooChange} = useFoo();

    return (
        <button onClick={onFooChange}>
            {foo}
        </button>
    );
};
FooComponent.propTypes = {};