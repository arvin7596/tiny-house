import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
    const queryCLient = useQueryClient();
    const { isLoadingBooking, mutate: deleteBooking } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            toast.success("Booking successfully deleted");
            queryCLient.invalidateQueries({
                queryKey: ["bookings"],
            });
        },
        onError: (err) => toast.error(err.massage),
    });
    return { isLoadingBooking, deleteBooking }
}