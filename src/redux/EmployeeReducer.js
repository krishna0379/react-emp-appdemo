const initState = {
  employee: {},
  list: [],

  sampleList: ["Delhi", "Kolkata", "hyd", "vizag"],
};
//action types
const EMPLOYEE_CREATE = "EMPLOYEE_CREATE";
const EMPLOYEE_UPDATE = "EMPLOYEE_UPDATE";
const EMPLOYEE_DELETE = "EMPLOYEE_DELETE";
const EMPLOYEE_GET_ALL = "EMPLOYEE_GET_ALL";
const EMPLOYEE_GET_BY_ID = "EMPLOYEE_GET_BY_ID";

//ACTIONS..>>
export function createEmployeeAction(payload) {
  return { type: EMPLOYEE_CREATE, payload: payload };
}

export function updateEmployeeAction(payload) {
  return { type: EMPLOYEE_UPDATE, payload: payload };
}

export function deleteEmployeeAction(payload) {
  return { type: EMPLOYEE_DELETE, payload: payload };
}

export function getAllEmployeeAction(payload) {
  return { type: EMPLOYEE_GET_ALL, payload: payload };
}

export function getByIdEmployeeAction(payload) {
  return { type: EMPLOYEE_GET_BY_ID, payload: payload };
}

//reducer logicc..
 export function EmployeeReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      //todo
      return state;

    case EMPLOYEE_UPDATE:
      //todo
      return state;

    case EMPLOYEE_DELETE:
      //todo
      return state;

    case EMPLOYEE_GET_ALL:
      //todo
      return state;

    case EMPLOYEE_GET_BY_ID:
      //todo
      return state;

    default:
      return state;
  }
}
