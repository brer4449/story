import React from "react";
import { GoogleLogin } from "react-google-login";

// client id: 402619144358-spoalto8jcjv4n3mqou831qfvq4e7c1h.apps.googleusercontent.com
// client secret: onlUPfO5YE_uXPgUSkk0x1hw
const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

function GoogleLoginComp() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login failed] res: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default GoogleLoginComp;
