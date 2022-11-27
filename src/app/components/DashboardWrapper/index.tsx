import * as React from "react";

import { links } from "./links";
import DashboardHeader from "../DashboardHeader";
import {
  ChildrenWrapper,
  DashboardWrapperContainer,
  Navigation,
  NavigationTitle,
  NavItem,
  PrimaryButton,
  PrimaryButtonWrapper,
} from "./DashboardWrapper.styles";

const NavigationItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <NavItem>
      <div className="icon">{icon}</div>
      <p>{label}</p>
    </NavItem>
  );
};

const navigationMarkup = () => (
  <Navigation>
    {links.map((link) => (
      <div className="navSection">
        {link.section && <NavigationTitle>{link.section}</NavigationTitle>}

        {link.navigationItems.map((item) => (
          <NavigationItem icon={item.icon} label={item.label} />
        ))}
      </div>
    ))}
  </Navigation>
);

interface DashboardWrapperprops extends React.PropsWithChildren {}

export default function DashboardWrapper(props: DashboardWrapperprops) {
  return (
    <div>
      <DashboardHeader />

      <DashboardWrapperContainer>
        <div>
          <PrimaryButtonWrapper>
            <PrimaryButton>Generate Invoice</PrimaryButton>
          </PrimaryButtonWrapper>

          {navigationMarkup()}
        </div>

        <ChildrenWrapper>{props.children}</ChildrenWrapper>
      </DashboardWrapperContainer>
    </div>
  );
}