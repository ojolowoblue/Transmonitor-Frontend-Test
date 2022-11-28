import styled from "@emotion/styled";

export const DashboardHeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1000;
  display: grid;
  grid-template-columns: minmax(240px, 260px) 1fr;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  padding: 15px 80px 15px 42px;
  min-height: 60px;

  .logo {
    display: flex;
    align-items: center;
  }

  .headerContents {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SearchInput = styled.input`
  border: none;
  height: 30px;
  padding-left: 16px;
  outline: none;
  transition: all 500ms;

  :focus {
    border-bottom: solid 1px #8dcfff;
  }

  ::placeholder {
    color: #979797;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: -8px;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    padding-left: 36px;
    font-size: 14px;
    color: #647787;
  }

  svg {
    margin-left: 62px;
    margin-right: 52px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .info {
    small {
      font-size: 10px;
    }
    p {
      font-size: 14px;
      color: #647787;
    }
  }

  img {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin-bottom: -6px;
  }
`;
