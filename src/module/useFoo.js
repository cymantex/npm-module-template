import {useState} from "react";

export const useFoo = () => {
    const [foo, setFoo] = useState("foo");

    return {
        foo,
        onFooChange: () => setFoo(foo === "bar" ? "foo" : "bar")
    }
};