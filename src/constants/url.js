const BASE_URL = "http://localhost:3200/api";

export const employeeUrl = () => {
  return `${BASE_URL}/getEmployee`;
};

export const filterNoMaskUrl = () => {
  return `${BASE_URL}/getFilterNoMask`;
};

export const filterMaskUrl = () => {
  return `${BASE_URL}/getFilterMask`;
};

export const updateEmployee = () => {
  return `${BASE_URL}/updateEmployee`;
};
export const deleteEmployee = () => {
  return `${BASE_URL}/deleteEmployee`;
};

export const totalEmployee = () => {
  return `${BASE_URL}/totalEmployee`;
};

export const totalNoMask = () => {
  return `${BASE_URL}/totalNoMask`;
};
