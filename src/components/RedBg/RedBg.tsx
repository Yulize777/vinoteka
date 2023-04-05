import React from "react";


type title = {
    title: string
}

export const RedBg = (props: title ) => {
    return(
        <h1 className='delivery__title'>
            {props.title}
        </h1>
    )
}