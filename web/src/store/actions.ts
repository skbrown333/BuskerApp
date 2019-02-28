export const ACCOUNT_ACTION = "AccountAction";
export const ALL_EVENTS_ACTION = "AllEventsAction";
export const ADD_EVENT_ACTION = "AddEventAction";
export const ALL_ACCOUNTS_ACTION = "AllAccountsAction";
export const UPDATE_FILTER_ACTION = "UpdateFilterAction";
export const UPDATE_CENTER_ACTION = "UpdateCenterAction";

export function updateFilter(filter: any) {
  return {
    type: UPDATE_FILTER_ACTION,
    payload: filter
  };
}

export function updateAccount(account: any) {
  return {
    type: ACCOUNT_ACTION,
    payload: account
  };
}

export function updateAccounts(accounts: any) {
  return {
    type: ALL_ACCOUNTS_ACTION,
    payload: accounts
  };
}

export function updateEvents(events: any) {
  return {
    type: ALL_EVENTS_ACTION,
    payload: events 
  }
}

export function addEvent(event: any) {
  return {
    type: ADD_EVENT_ACTION,
    payload: event 
  }
}

export function updateCenter(center: any) {
  return {
    type: UPDATE_CENTER_ACTION,
    payload: center 
  }
}
