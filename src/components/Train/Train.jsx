import React, { useEffect, useState } from "react";
import { Row } from 'react-bootstrap'
import Card from "../Card/CardSet";


function Train(props) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getSets().then((data) => setCards(data))
    }, [])

    async function getSets() {
        const url = "http://localhost:3010";
        const endpoint = "sets";
        const response = await fetch(`${url}/${endpoint}`)

        return await response.json();
    }

    return (
        <Row xs={1} sm={2} md={4} className="g-4">
            {cards.map(({id, name, level, quantity, image}) => (
                <Card key={id} id={id} name={name} level={level} quantity={quantity} image={image}/>
            ))}
        </Row>
    )
}

export default Train;