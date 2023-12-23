import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Employee, getEmployeeList } from "@/services/employees";

export const getEmployeeData = () => {
    const { data } = useSuspenseQuery<Employee[]>({
        queryKey: ["stream-hydrate-users"],
        queryFn: () => getEmployeeList(),
        staleTime: 5 * 1000,
      });

    return data;
}