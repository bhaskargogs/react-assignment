import React from 'react'

const validationcomponent = (props) => {
    return (
        <div style={{display: 'inline-block'}}>
            { props.count < 5 && <p>Text too short</p>}
            { props.count > 16 && <p>Text long enough</p>}
        </div>
    )
}

export default validationcomponent;