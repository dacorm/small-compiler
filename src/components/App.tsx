import React from "react";

type Item = {
    id: number;
    name: string;
}

type AppProps = {
    info: {
        desc: string;
    };
    items: Item[];
};

export function App({ info, items }: AppProps) {
    const title = info.desc;
    const filteredItems = items.filter(item => item.id > 2);

    return (
        <div>
            <p>{title}</p>
            {filteredItems.map(item => (<p>{item.name}</p>))}
        </div>
    )
}

