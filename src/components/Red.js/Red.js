import React from 'react';
import {connect} from 'react-redux';

export function Red(props) {

    return (
        <div style={{background: 'red'}}>
        I'm Red
        <h2>{props.greenInput}</h2>
            </div>
    )
}


function mapStateToProps (state) {
    return {
        greenInput: state.greenInput
    }
}
export default connect(mapStateToProps)(Red)