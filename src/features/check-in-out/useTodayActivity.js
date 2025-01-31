import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
    const { data: todayActivity, isLoading: isActivityLoading } = useQuery({
        queryFn: getStaysTodayActivity,
        queryKey: ["today-activity"]
    })
    return { todayActivity, isActivityLoading }
}