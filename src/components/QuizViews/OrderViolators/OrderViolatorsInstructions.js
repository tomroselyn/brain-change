import React, { Component } from 'react'
import { Link} from 'react-router-dom'; 
import {  Button } from '@material-ui/core';

import './OrderViolatorsInstructions.css'

export class OrderViolatorsInstructions extends Component {
    render() {
        return (
            <div>
                <div className="instructions">
                On the next screen you will see your 5 core value violators. 
                Rank your 5 violators from the one that causes the most conflict
                in your life to the one that causes the least. 
                </div>

                <div className="giph">

                </div>

                <Link to="/OrderViolators">    
                    <Button
                        color="primary"
                        variant="contained"
                        >
                        Next
                    </Button> 
                </Link>
            </div>
        )
    }
}

export default OrderViolatorsInstructions