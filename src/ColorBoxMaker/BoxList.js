import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";



function BoxList() {

    const [boxes, setBoxes] = useState([]);

    const handleremove = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }


    const addBox = (boxObj) => {
        setBoxes(boxes => [...boxes, boxObj])
    }

    const boxComponents = boxes.map(box => (
        < Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            handleremove={handleremove}
            backgroundColor={box.backgroundColor}
        />
    )

    )
    return (
        <>
            <NewBoxForm addBox={addBox} />
            {boxComponents}

        </>
    )
}


export default BoxList;