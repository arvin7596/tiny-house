import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Uploader from "./../data/Uploader";
import useUser from "../features/authentication/useUser";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  const { isAnonymous } = useUser();
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      {!isAnonymous && <Uploader />}
    </StyledSidebar>
  );
}

export default Sidebar;
