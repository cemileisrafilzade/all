import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkLocalSession } from '../tools/localStorageTools';

import { AuthContext } from '../context/AuthContext';

export const PrivateRoute = ({ path, component }) => {
    const { auth } = useContext(AuthContext);
    return (
        checkLocalSession() || auth ?
            <Route path={path} component={component} />
            :
            <Redirect to="/auth" />
    )
}