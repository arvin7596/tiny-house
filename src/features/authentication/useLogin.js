import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAnonymous, login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading: isLoginLoading } = useMutation({
    mutationFn: ({ isGuest, email, password }) =>
      isGuest ? loginAnonymous() : loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user", user.user]);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error("Provided Email or Password are incorrect");
    },
  });

  return { login, isLoginLoading };
}

export default useLogin;
