import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import { useEffect } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isUserLoading } = useUser();
  useEffect(() => {
    if (!isAuthenticated && !isUserLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isUserLoading, navigate]);
  if (isUserLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
