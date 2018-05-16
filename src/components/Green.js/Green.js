import React from 'react';
import {connect} from 'react-redux';
import {handleInputValue} from '../../reducer';

export function Green(props) {

    return (
        <div style={{background: 'green'}}>
        I'm Green
        <br />
        <input type='text' placeholder='green input' onChange={event => props.handleInputValue(event.target.value)} />
            </div>
    )
}


const mapDispatchToProps = {
    handleInputValue
}



export default connect(null, mapDispatchToProps) (Green);