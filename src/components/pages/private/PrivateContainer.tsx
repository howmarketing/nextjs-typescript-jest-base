import React, { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

import "./PrivateContainer.scss";
import prudentialWhiteLogo from "assets/pru-logo_white.svg";
import { AuthenticationService } from "../../utils/services/authentication/authentication.service";

const PrivateContainer: React.FC = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const authenticationService = new AuthenticationService();

  return (
    <>
      <div className="header">
        <div className="d-flex align-items-center">
          <img
            src={prudentialWhiteLogo}
            alt="Prudential Logo"
            className="logo"
          />
        </div>
        <div className="d-flex align-items-center">
          {/* <FontAwesomeIcon icon={faBell} /> */}
          <Link to="perfil">
            <div className="profile">
              <img src="https://picsum.photos/200" />
              <div className="profile-info">
                Seja bem vindo, <br />
                Usuário
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="content-wrapper">
        <h5 className="app-title">Sistema Finance Engine</h5>
        <Outlet />
      </div>
      <div className="footer">
        &copy; Copyright 2022 - Prudential do Brasil.
      </div>
    </>
  );
};

export default PrivateContainer;
