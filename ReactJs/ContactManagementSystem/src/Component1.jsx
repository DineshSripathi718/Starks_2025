import './Component1.css'

function Component1(){
    const details = {
        name : "component1",
        year : 2025
    }

    /* 
        style attribute --> object
    */

    const inlineStyle = {
        backgroundColor : "black",
        color : "white",
        fontSize : "4em"
    }

    return <>
            <h2>name : {details.name}</h2>
            <p>
                year  : {details.year}
            </p>
    </>
}

export default Component1