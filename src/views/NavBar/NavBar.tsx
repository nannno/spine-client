import React from 'react';
import GoogleLogin, {GoogleLogout} from "react-google-login";

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function NavBar() {
    return (
        <div className="App">
            <GoogleLogin
                clientId={googleClientId!}
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={(response) => {
                    console.log("login success")
                    console.log(response);
                }}
                onFailure={(err) => {
                    console.log("Google Login failed", err)
                }}
            />
            <GoogleLogout
                clientId={googleClientId!}
                onLogoutSuccess={() => {
                    console.log("logout success");
                }}/>
        </div>
    );
}

export default NavBar;
