import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Jumbotron, Image } from "react-bootstrap";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <Jumbotron className="pt-0 pb-0 d-none d-md-block">
          {/* <img src={user.picture} alt={user.name} /> */}
          <h2>Welcome {user.name}</h2>
          {/* <p>{user.email}</p> */}
          {/* <JSONPretty data={user} /> */}
        </Jumbotron>
        <Jumbotron className=" d-sm-block d-md-none mt-3 w-100">
          <Image src={user.picture} alt={user.name} roundedCircle className="m-3" />
          <div className="float-right">
            <h4>Welcome</h4>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          {/* <JSONPretty data={user} /> */}
        </Jumbotron>
      </>
    )
  );
};

export default Profile;
