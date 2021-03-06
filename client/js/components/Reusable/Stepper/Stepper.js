// @flow
import React, { Component } from 'react';
import Radium from 'radium';

import { Step, Stepper, StepLabel } from 'material-ui/Stepper';

@Radium
export default class MyStepper extends Component {
    static defaultProps = {};
    props: { activeStep: number };
    state: void;

    render() {
        const { activeStep } = this.props;

        return (
            <div style={STYLES.container}>
                <Stepper activeStep={activeStep - 1}>
                    <Step>
                        <StepLabel style={STYLES.label}>Set Preferences</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel style={STYLES.label}>Get Suggestions</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel style={STYLES.label}>Sign Up</StepLabel>
                    </Step>
                </Stepper>
            </div>
        );
    }
}

const STYLES = {
    container: {
        zIndex: 10,
        transform: 'scale(0.75, 0.75) translate(-25px, 30px)',
        '@media (min-width: 520px)': {
            transform: 'scale(1, 1)'
        }
    },

    label: {
        color: 'white'
    }
};
