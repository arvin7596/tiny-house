import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
    const queryCLient = useQueryClient();
    const { isLoadingDelete, mutate: deleteCabin } = useMutation({
        mutationFn: deleteCabinAPI,
        onSuccess: () => {
            toast.success("Cabin successfully deleted");
            queryCLient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.massage),
    });
    return { isLoadingDelete, deleteCabin }
}