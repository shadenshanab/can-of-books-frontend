import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class LoginButton extends React.Component {
    render() {
        const LoginButton = () => {
            const { loginWithRedirect } = useAuth0();}

            return !isAuthenticated && (
                <button onClick={loginWithRedirect}>Log in</button>
            );
        }
    }

export default withAuth0(LoginButton);