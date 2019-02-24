export const ACCOUNT_ACTION = "AccountAction";
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
  }
}

export function updateCenter(center: any) {
  return {
    type: UPDATE_CENTER_ACTION,
    payload: center 
  }
}
