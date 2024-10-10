import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { logout as logoutApi } from "../../services/apiAuth"

function useLogout() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate: logout, isLoading: isLogoutLoading } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries()
            navigate("/login", { replace: true })
        },
        onError: (err) => {
            toast.error("Provided Email or Password are incorrect")
        }
    })

    return { logout, isLogoutLoading }
}

export default useLogout
