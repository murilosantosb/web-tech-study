import React from 'react'

import { CardProductImageContainer } from "./CardProductImageStyles";

type Props = {}

const CardProductImageComponent = (props: Props) => {
  return (
    <CardProductImageContainer>
        <section>
            <img src="./clothes/tenis-02.png" alt="Tenis" />
        </section>
        <section>
            <img src="./clothes/tenis-01.png" alt="Tenis" />
        </section>
        <section>
            <img src="./clothes/blusa-azul-marinho.png" alt="Roupa" />
        </section>
    </CardProductImageContainer>
  )
}

export default CardProductImageComponent