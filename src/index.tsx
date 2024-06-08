import React from "react";
import { App } from "./components/App";
import { createRoot } from "react-dom/client";

const info = {
    desc: 'Test items'
}

const items = [{
    id: 1,
    name: 'Hi'
}, {
    id: 2,
    name: 'Hi2'
}, {
    id: 3,
    name: 'Hi3'
}, {
    id: 4,
    name: 'Hi4'
},]

createRoot(document.getElementById("root")).render(<App items={items} info={info} />);
