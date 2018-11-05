import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Spinner from "react-spinkit";

// Component can be any component with the adopted redirect behavior

export default () => Component => {
    function RequiresLogin(props) {
        const {authenticating, loggedIn, error} = props;
        if (authenticating) {
            return (
                <div className="spinner-container">
                    Searching in progress...
                    <Spinner className="spinner" name="circle" />
                </div>
            );
        } else if (!loggedIn || error) {
            return <Redirect to = "/" /> ;
        }

        return <Component/> ;
    }

    // Set the display name of the wrapping component
    const displayName = Component.displayName || Component.name || 'Component';
    RequiresLogin.displayName = `RequiresLogin(${displayName})`;

    const mapStateToProps = state => ({
        authenticating: state.loading,
        loggedIn: state.user,
        error: state.error
    });

    return connect(mapStateToProps)(RequiresLogin);
};