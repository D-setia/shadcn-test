import axios from 'axios'

const BASE_URL = "https://dummy.restapiexample.com/api/v1";

export type Employee = {
  id: number
  employee_name: string
  employee_salary: number
  employee_age: number
  profile_image: string
}


export const getEmployeeList = async () => {
  const response = await axios.get(`${BASE_URL}/employees`)

  return response.data.data as Employee[]
}


