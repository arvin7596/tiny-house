import ButtonIcon from "../../ui/ButtonIcon";
import useLogout from "./useLogout";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLogoutLoading } = useLogout();
  return (
    <ButtonIcon onClick={logout} disabled={isLogoutLoading}>
      {!isLogoutLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
