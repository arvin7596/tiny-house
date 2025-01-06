import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import useUser from "../features/authentication/useUser";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Main = styled.main`
  background-color: var(--color-grey-100);
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const GuestBanner = styled.div`
  color: var(--color-orange-700);
  background-color: var(--color-orange-100);
  padding: 1.6rem;
  border-radius: var(--border-radius-md);
  font-size: 1.4rem;
  font-weight: 500;
  text-align: start;
`;

function AppLayout() {
  const { isAnonymous } = useUser();
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          {isAnonymous && (
            <GuestBanner>
              You're currently logged in as a guest. Some features may be
              restricted.
            </GuestBanner>
          )}
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
