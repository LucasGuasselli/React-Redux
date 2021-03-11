import React, { cloneElement } from "react"



export default (props) =>{
    console.log(typeof props.children.map)
    return (
        <div>
            {
                React.Children.map(props.children, child =>{
                    return cloneElement(child, props)
                })      
            }
        </div>
    )
}