import axios from "axios";
import {
  employeeUrl,
  filterMaskUrl,
  filterNoMaskUrl,
  totalEmployee,
} from "./url";

const fetchEmployee = async ({ variables }) => {
  // console.log("Va", variables);
  const { data, status } = await axios.get(employeeUrl(), {
    params: { variables },
  });
  if (status >= 400) {
    throw new Error(data.errors);
  }
  // console.log("data", data);
  return data;
};

const fetchMask = async ({ startDate }) => {
  const { data, status } = await axios.get(filterMaskUrl(), {
    params: { startDate },
  });
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchNoMask = async () => {
  // console.log(startDate, endDate);
  const { data, status } = await axios.get(filterNoMaskUrl());
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchTotalEmployee = async () => {
  const { data, status } = await axios.get(totalEmployee());
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchEmployee, fetchNoMask, fetchMask, fetchTotalEmployee };
