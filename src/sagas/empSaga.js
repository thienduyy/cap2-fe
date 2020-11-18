import { call, put, takeLatest } from "redux-saga/effects";
import {
  employeeData,
  employeeError,
  EMPLOYEE_LOAD,
  NO_MASK_LOAD,
  noMaskData,
  noMaskError,
  NO_MASK_FILTER,
  MASK_LOAD,
  maskData,
  maskError,
} from "../constants/action";
import { fetchEmployee, fetchMask, fetchNoMask } from "../constants/api";

function* empHandling(action) {
  try {
    //call api
    // console.log("action", action);
    const { variables } = action;
    const params = { variables };
    // console.log(params);
    const empList = yield call(fetchEmployee, params);
    // console.log("data", empList);
    const employee = {
      employee: empList,
    };
    yield put(employeeData(employee));
  } catch (error) {
    yield put(employeeError(error.toString()));
  }
}

function* noMaskHandling(action) {
  try {
    // console.log(action);
    // const { startDate, endDate } = action;
    // const params = { startDate, endDate };
    // console.log("param", params);
    const empList = yield call(fetchNoMask);
    // console.log(empList);
    const employee = {
      employee: empList,
    };
    yield put(noMaskData(employee));
  } catch (error) {
    yield put(noMaskError(error.toString()));
  }
}
function* noMaskFilter(action) {
  try {
    const { empLists, value } = action;
    // console.log(action);
    const employee = {
      employee: empLists,
      search: value,
    };
    yield put(noMaskData(employee));
  } catch (error) {
    yield put(noMaskError(error.toString()));
  }
}

function* maskHandling(action) {
  try {
    const { startDate } = action;
    const params = { startDate };
    const empList = yield call(fetchMask, params);
    // console.log(" 1", empList);
    const employee = {
      employee: empList,
    };
    yield put(maskData(employee));
  } catch (error) {
    yield put(maskError(error.toString()));
  }
}

export default function* empSaga() {
  yield takeLatest(EMPLOYEE_LOAD, empHandling);
  yield takeLatest(NO_MASK_LOAD, noMaskHandling);
  yield takeLatest(NO_MASK_FILTER, noMaskFilter);
  yield takeLatest(MASK_LOAD, maskHandling);
}
