"use client";

import React from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getEmployeeData } from "@/hooks/employee-hook";


export default  function EmployeeTable(){
  const data = getEmployeeData();
  return <DataTable columns={columns} data={data} /> 
}