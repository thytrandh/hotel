import React, { useContext, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import useOnClickOutside from 'library/hooks/useOnClickOutside';
import { AuthContext } from 'context/AuthProvider';
import {
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
  ADD_HOTEL_PAGE,
} from 'settings/constant';
import { logout } from 'containers/Auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ProfileMenu({ avatar }) {
  let navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const handleDropdown = () => {
    setState(!state);
  };
  const closeDropdown = () => {
    setState(false);
  };
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setState(false));
  function handleLogout() {
    logOut();
    navigate('/', { replace: true });
  }

  const role = useSelector((state) => state.auth.currentUser?.user?.role);

  return (
    <div className="avatar-dropdown" ref={dropdownRef}>
      <div className="dropdown-handler" onClick={handleDropdown}>
        {avatar}
      </div>
      <>
        {
          (role === "supplier") ? (
            <Menu className={`dropdown-menu ${state ? 'active' : 'hide'}`}>
              <Menu.Item onClick={closeDropdown} key="0">
                <NavLink to={AGENT_PROFILE_PAGE}>View Profile</NavLink>
              </Menu.Item>
              <Menu.Item onClick={closeDropdown} key="1">
                <NavLink to={ADD_HOTEL_PAGE}>Add Hotel</NavLink>
              </Menu.Item>
              <Menu.Item onClick={closeDropdown} key="2">
                <NavLink to={AGENT_ACCOUNT_SETTINGS_PAGE}>Account Settings</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <button onClick={handleLogout}>Log Out</button>
              </Menu.Item>
            </Menu>
          ) : (
            <Menu className={`dropdown-menu ${state ? 'active' : 'hide'}`}>
              <Menu.Item onClick={closeDropdown} key="0">
                <NavLink to={AGENT_ACCOUNT_SETTINGS_PAGE}>Account Settings</NavLink>
              </Menu.Item>
              <Menu.Item key="1">
                <button onClick={handleLogout}>Log Out</button>
              </Menu.Item>
            </Menu>
          )
        }
      </>
    </div>
  );
}
