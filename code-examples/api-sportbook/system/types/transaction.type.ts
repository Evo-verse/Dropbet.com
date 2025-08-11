export enum TransactionSportbookType {
  // Deposit: Creates a bet and deducts money
  deposit = 'deposit',

  // Withdrawal: Settles a bet and adds money
  withdrawal = 'withdrawal',

  // Rollback: Reverses a transaction, restoring the previous state
  rollback = 'rollback',
}

export enum SportsbookContextReasonEnum {
  bet = 'bet',
  settle = 'settle',
  resettle = 'resettle',
  cancelsettle = 'cancelsettle',
  sport_rollback = 'sport rollback',
  partial_settle = 'partial settle',
  partial_resettle = 'partial resettle',
  partial_cancelsettle = 'partial cancelsettle',
}

export enum SportsbookTransactionsReasonAdapter {
  cancel = 'cancel',
  resettle = 'resettle',
}
