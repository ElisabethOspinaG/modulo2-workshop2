import React from 'react'
import { Nav } from './StyledNav'
const Nabvar = () => {
    const links = [
        {
            name: "About",
            route: ""
        },
        {
            name: "Careers",
            route: ""
        },
        {
            name: "Events",
            route: ""
        },
        {
            name: "Products",
            route: ""
        },
        {
            name: "Support",
            route: ""
        }
    ]
    return (
        <Nav>
            <ul>
                {
                    links.map((item, index) => <a href='#'><li key={`${item.name}-${index}`}>{item.name}</li></a>)
                }
            </ul>
        </Nav>
    )
}

export default Nabvar