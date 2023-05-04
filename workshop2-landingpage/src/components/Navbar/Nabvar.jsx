import React from 'react'
import { Nav } from './StyledNav'
const Nabvar = ({padding}) => {
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
        <Nav padding={padding}>
            <ul>
                {
                    links.map((item, index) => <a href='#' key={`${item.name}-${index}`}><li >{item.name}</li></a>)
                }
            </ul>
        </Nav>
    )
}

export default Nabvar