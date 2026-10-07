import React from 'react';
import type { ReactNode } from 'react';
import { CardGroupContainer, CardGroupList } from './CardGroupStyles';

type Props = {
    title: string,
    children: ReactNode
}

const CardGroupComponent = (props: Props) => {
  return (
    <CardGroupContainer>
        <h1>{props.title}</h1>

        <CardGroupList>
            {props.children}
        </CardGroupList>
    </CardGroupContainer>
  )
}

export default CardGroupComponent