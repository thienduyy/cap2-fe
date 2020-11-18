export const EMPLOYEE_LOAD = "EMPLOYEE_LOAD";
export const EMPLOYEE_DATA = "EMPLOYEE_DATA";
export const EMPLOYEE_ERROR = "EMPLOYEE_ERROR";
export const NO_MASK_LOAD = "NO_MASK_LOAD";
export const NO_MASK_DATA = "NO_MASK_DATA";
export const NO_MASK_ERROR = "NO_MASK_ERROR";
export const NO_MASK_FILTER = "NO_MASK_FILTER";
export const MASK_LOAD = "MASK_LOAD";
export const MASK_DATA = "MASK_DATA";
export const MASK_ERROR = "MASK_ERROR";
export const MASK_FILTER = "MASK_FILTER";

const action = (type, payload = {}) => {
  return { type, ...payload };
};

export const employeeLoad = (variables) => {
  return action(EMPLOYEE_LOAD, { variables });
};
export const employeeData = (payload) => {
  return action(EMPLOYEE_DATA, payload);
};
export const employeeError = (error) => {
  return action(EMPLOYEE_ERROR, error);
};
export const noMaskLoad = (payload) => {
  return action(NO_MASK_LOAD, payload);
};
export const noMaskData = (payload) => {
  return action(NO_MASK_DATA, payload);
};
export const noMaskError = (error) => {
  return action(NO_MASK_ERROR, error);
};
export const noMaskFilter = (payload) => {
  return action(NO_MASK_FILTER, payload);
};
export const maskLoad = (startDate) => {
  return action(MASK_LOAD, { startDate });
};
export const maskData = (payload) => {
  return action(MASK_DATA, payload);
};
export const maskError = (error) => {
  return action(MASK_ERROR, error);
};
export const maskFilter = (startDate) => {
  return action(MASK_FILTER, { startDate });
};
