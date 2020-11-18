import {
  EMPLOYEE_LOAD,
  EMPLOYEE_DATA,
  EMPLOYEE_ERROR,
  NO_MASK_LOAD,
  NO_MASK_DATA,
  NO_MASK_ERROR,
  NO_MASK_FILTER,
  MASK_LOAD,
  MASK_DATA,
  MASK_ERROR,
  MASK_FILTER,
} from "../constants/action";

const initialState = {
  isLoading: false,
  empList: [],
  empListFilter: [],
  empListInput: [],
  date: null,
  variable: {},
  search: null,
  error: null,
};

const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case EMPLOYEE_DATA: {
      // console.log("data", action);
      const { employee } = action;
      const cloneState = { ...state };
      cloneState.isLoading = false;
      cloneState.empList = employee;
      cloneState.empListFilter = employee;

      return cloneState;
    }
    case EMPLOYEE_ERROR: {
      return { ...state, isLoading: false, error: action.error };
    }
    case NO_MASK_LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case NO_MASK_DATA: {
      //   console.log("data", action);
      const { employee } = action;
      const cloneState = { ...state };
      cloneState.isLoading = false;
      // console.log("action", action);
      if (action.search === "" || action.search === null || !action.search) {
        cloneState.empList = employee;
        cloneState.empListFilter = employee;
      } else {
        cloneState.empList = employee;
      }
      return cloneState;
    }
    case NO_MASK_ERROR: {
      return { ...state, isLoading: false, error: action.error };
    }
    case NO_MASK_FILTER: {
      return { ...state, isLoading: true, error: null };
    }

    //Mask
    case MASK_LOAD: {
      return { ...state, isLoading: true, error: null };
    }
    case MASK_DATA: {
      const { employee } = action;
      const cloneState = { ...state };
      cloneState.isLoading = false;
      if (action.search === "" || action.search === null || !action.search) {
        cloneState.empList = employee;
        cloneState.empListFilter = employee;
      } else {
        cloneState.empList = employee;
      }
      return cloneState;
    }
    case MASK_ERROR: {
      return { ...state, isLoading: false, error: action.error };
    }
    case MASK_FILTER: {
      return { ...state, isLoading: true, error: null };
    }

    default:
      return state;
  }
};
export default empReducer;
