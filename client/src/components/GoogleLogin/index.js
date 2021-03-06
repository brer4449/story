import React from "react";
import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../../utils/refreshtoken";

// client id: 402619144358-spoalto8jcjv4n3mqou831qfvq4e7c1h.apps.googleusercontent.com
// client secret: onlUPfO5YE_uXPgUSkk0x1hw
const clientId =
  "402619144358-spoalto8jcjv4n3mqou831qfvq4e7c1h.apps.googleusercontent.com";

function GoogleLoginComp() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser: ", res.profileObj);
    console.log(res.profileObj.imageUrl);

    // initializing the setup
    refreshTokenSetup(res);
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
