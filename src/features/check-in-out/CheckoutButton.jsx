import Button from "../../ui/Button";
import useUser from "../authentication/useUser";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  const { isAnonymous } = useUser();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut || isAnonymous}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
