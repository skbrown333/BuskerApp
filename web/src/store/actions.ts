export const ACCOUNT_ACTION = "AccountAction";
export function updateAccount(account: any) {
  return {
    type: ACCOUNT_ACTION,
    account: account
  };
}
