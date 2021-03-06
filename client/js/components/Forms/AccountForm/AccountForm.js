import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';

import validate from './validate';

import Button from 'reusable/Button/Button';
import Input from 'reusable/Input/TextField';
import Select from 'reusable/Input/Select';

@Radium
class AccountForm extends Component {
    static defaultProps = {};
    props: {
        handleSubmit: () => void,
        reset: () => void,
        submitting: boolean,
        pristine: boolean
    };
    state: void;

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit} style={STYLES.form}>
                <div style={STYLES.fieldContainer}>
                    <Field name="email" component={email =>
                        <div style={STYLES.field}>
                            <Input
                                type="email"
                                floatingLabelText="Email"
                                disabled
                                errorText={email.touched && email.error ? email.error : ''}
                                {...email}
                            />
                        </div>
                    }
                    />
                </div>

                <div style={STYLES.fieldContainer}>
                    <Field name="name" component={name =>
                        <div style={STYLES.field}>
                            <Input
                                type="text"
                                floatingLabelText="Name"
                                errorText={name.touched && name.error ? name.error : ''}
                                {...name}
                            />
                        </div>
                    }
                    />
                </div>

                <div style={STYLES.fieldContainer}>
                    <Field name="age" component={age =>
                        <div style={STYLES.field}>
                            <Input
                                type="number" {...age}
                                floatingLabelText="Age"
                                errorText={age.touched && age.error ? age.error : ''}
                            />
                        </div>
                    }
                    />
                </div>

                <div style={STYLES.fieldContainer}>
                    <Field name="gender" component={gender =>
                        <div style={STYLES.field}>
                            <Select
                                options={['male', 'female']}
                                floatingLabelText="Gender*"
                                {...gender}
                            />
                        </div>
                    }
                    />
                </div>

                <div style={STYLES.buttonContainer}>
                    <Button
                        label="Update"
                        disabled={submitting}
                        type="submit"
                        style={STYLES.submitButton}
                    />
                    <Button
                        label="Reset"
                        disabled={pristine || submitting}
                        onClick={reset}
                    />
                </div>
            </form>
        );
    }
}

const STYLES = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        padding: '0 16px',
        maxWidth: '500px',
        boxSizing: 'border-box'
    },

    buttonContainer: {
        display: 'flex',
        marginTop: '12px'
    },

    submitButton: {
        marginRight: '12px'
    },

    fieldContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3px'
    },

    field: {
        width: '100%'
    }
};

AccountForm = reduxForm({
    form: 'AccountForm',
    validate
})(AccountForm);

AccountForm = connect((state) => ({ initialValues: state.get('user') }))(AccountForm);

export default AccountForm;
