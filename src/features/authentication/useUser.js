import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../../services/apiAuth"

function useUser() {
    const { data: user, isLoading: isUserLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser
    })
    return {
        isUserLoading, isAuthenticated: user?.role === "authenticated", user
    }
}
export default useUser
