// import { Component } from "react";


// class Header extends Component{
//     render(){
//         return <h1>Header Component</h1>
//     }
// }

// function Header(){
//     return <>
//         <h1>Functional Component</h1>
//     </>
// }

import './Header.css'

const Header = () => {
    const COMPANY = "Brolly"


    return <>
        <header>
            <div className="company-name">{COMPANY} CRM</div>
            <nav></nav>
        </header>
    </>
}

export default Header