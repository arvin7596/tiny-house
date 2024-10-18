import { useQuery } from "@tanstack/react-query"
import { getStaysAfterDate } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"
import { subDays } from "date-fns";

export function useRecentStays() {
    const [searchParams] = useSearchParams()

    const numDays = !searchParams.get('last')
        ? 7
        : Number(searchParams.get("last"));
    const queryData = subDays(new Date(), numDays).toISOString()
    const { data: recentStays, isLoading: isRecentStayLoading } = useQuery({
        queryFn: () => getStaysAfterDate(queryData),
        queryKey: ["stays", `last-${numDays}`]
    })
    const confirmedStays = recentStays?.filter(
        (stay) => stay.status === "checked-in" || stay.status === "checked-out"
    );

    return { recentStays, isRecentStayLoading, confirmedStays, numDays }
}

