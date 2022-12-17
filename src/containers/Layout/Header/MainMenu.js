import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  PRICING_PLAN_PAGE,
  PRIVACY_PAGE,
} from 'settings/constant';
import { useSelector } from 'react-redux';

const MainMenu = ({ className }) => {

  const role = useSelector((state) => state.auth.currentUser?.user?.role);

  return (
    <>
    {
      (role === "supplier") ? (
        <Menu className={className}>
          <Menu.Item key="0">
            <NavLink to={AGENT_PROFILE_PAGE}>Agent</NavLink>
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink to={PRICING_PLAN_PAGE}>Pricing</NavLink>
          </Menu.Item>
      </Menu>
        ):(
          <Menu className={className}>
            <Menu.Item key="0">
              <NavLink to={HOME_PAGE}>Hotels</NavLink>
            </Menu.Item>
            <Menu.Item key="1">
              <NavLink to={LISTING_POSTS_PAGE}>Listing</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to={PRIVACY_PAGE}>Privacy</NavLink>
            </Menu.Item>
          </Menu>
        )
    }
    </>
  );
};

export default MainMenu;
