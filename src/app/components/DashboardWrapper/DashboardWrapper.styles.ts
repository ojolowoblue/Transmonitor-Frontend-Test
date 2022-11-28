import styled from "@emotion/styled";

export const DashboardWrapperContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(240px, 260px) 1fr;

  .navigation {
    position: fixed;
    height: 100vh;
    top: 60px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 2px;
    }
  }
`;

export const ChildrenWrapper = styled.div`
  margin-top: 60px;
  padding: 33px 80px 33px 30px;
  background: #f7f8fa;
`;

export const Navigation = styled.nav`
  background: #ffffff;

  .navSection {
    margin-bottom: 30px;
  }
`;

export const NavigationTitle = styled.p`
  font-size: 11px;
  padding-left: 42px;
  margin-bottom: 14px;
`;

export const NavItem = styled.div`
  display: flex;
  gap: 14.52px;
  align-items: center;
  color: #647787;
  padding-left: 42px;
  transition: all 500ms;
  cursor: pointer;

  :hover {
    background: #e8f1fe;
    border-left: solid 4px #1875f0;
  }

  .icon {
    width: 20px;
    padding: 8px 0;
  }

  p {
    font-size: 11px;
    margin-top: -1px;
  }
`;

export const PrimaryButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;
`;

export const PrimaryButton = styled.div`
  width: 163px;
  height: 33px;
  background: #27ae60;
  border-radius: 30px;
  font-weight: 700;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  transition: all 500ms;

  :hover {
    background: #1dbf73;
  }
`;
