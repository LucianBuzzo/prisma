export const enum IsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Snapshot = 'Snapshot',
  Serializable = 'Serializable',
}

export type Options = {
  maxWait?: number
  timeout?: number
  isolationLevel?: IsolationLevel
  newTxId?: string
}

export type TransactionInfo = {
  id: string
}
