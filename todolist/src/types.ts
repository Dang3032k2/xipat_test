export enum ACTION_TYPE_ENUM {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
}

export enum TODO_STATUS {
  ALL = 2,
  COMPLETED = 1,
  WAITING_FOR_PROSESSING = 0,
}
export interface ITodoItem {
  id?: string;
  name: string;
  desc: string;
  completed?: number;
}
