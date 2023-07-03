import React from 'react'

interface Props {
    cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
    return (
        <div>
            <p>Lesson 044 - Sharing state between components.</p>
            NavBar: {cartItemsCount}
            <p>Component that hold the state is responsible for updating it</p>
        </div>
    )
}

export default NavBar