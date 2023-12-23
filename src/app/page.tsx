// import { Payment, payments } from "../../_data/payment_data"
import {columns} from "./data-table/columns"
import { DataTable } from "./data-table/data-table";
import { getEmployeeData } from "@/hooks/employee-hook";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Employee, getEmployeeList } from "@/services/employees";
import { Suspense } from "react";
import EmployeeTable from "./data-table/employee-table";
import { dehydrate } from "@tanstack/react-query";

export default async function Home() {
  return (
    <main>
      <div className="container mx-auto py-10">
      <Suspense
        fallback={
          <p style={{ textAlign: "center" }}>loading... on initial request</p>
        }
      >
        <EmployeeTable  />
      </Suspense>
      </div>
    </main>
  )
}
