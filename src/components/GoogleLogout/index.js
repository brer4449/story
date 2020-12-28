import React from "react";
import { GoogleLogout } from "react-google-login";

// client id: 402619144358-spoalto8jcjv4n3mqou831qfvq4e7c1h.apps.googleusercontent.com
// client secret: onlUPfO5YE_uXPgUSkk0x1hw
const clientId =
  "402619144358-spoalto8jcjv4n3mqou831qfvq4e7c1h.apps.googleusercontent.com";

function GoogleLogoutComp() {
  const onSuccess = () => {
    alert("Logout made successfully");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
      />
    </div>
  );
}

export default GoogleLogoutComp;
