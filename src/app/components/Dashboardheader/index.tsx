import styled from "@emotion/styled";

import { ReactComponent as Logo } from "app/assets/icons/logo.svg";
import { ReactComponent as SearchIcon } from "app/assets/icons/search.svg";
import { ReactComponent as NotificationIcon } from "app/assets/icons/notification.svg";

import Ojo from "app/assets/images/ojo.png";
import {
  DashboardHeaderWrapper,
  HeaderNav,
  InfoWrapper,
  SearchBox,
  SearchInput,
} from "./DashboardHeader.styles";

const InfoSection = () => {
  return (
    <InfoWrapper>
      <div className="info">
        <small>Hello</small>
        <p>Oluwaleke Ojo</p>
      </div>

      <div>
        <img src={Ojo} alt="Oluwaleke Ojo" />
      </div>
    </InfoWrapper>
  );
};

export default function DashboardHeader() {
  return (
    <DashboardHeaderWrapper>
      <div className="logo">
        <Logo />
      </div>

      <div className="headerContents">
        <SearchBox>
          <SearchIcon />
          <SearchInput placeholder="Search ..." />
        </SearchBox>

        <HeaderNav>
          <p className="link">Support</p>
          <p className="link">FAQ</p>
          <NotificationIcon />
          <InfoSection />
        </HeaderNav>
      </div>
    </DashboardHeaderWrapper>
  );
}
