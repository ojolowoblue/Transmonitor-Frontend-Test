import * as React from "react";

import { links } from "./links";
import DashboardHeader from "app/components/DashboardHeader";
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
    {links.map((link, idx) => (
      <div key={idx.toString()} className="navSection">
        {link.section && <NavigationTitle>{link.section}</NavigationTitle>}

        {link.navigationItems.map((item, id) => (
          <NavigationItem
            key={id.toString()}
            icon={item.icon}
            label={item.label}
          />
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
        <div></div>
        <div className="navigation">
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
