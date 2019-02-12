/* Account */
export const AccountAction = "AccountAction";
export function updateAccount(account: any) {
  return {
    type: AccountAction,
    account: account
  };
}
