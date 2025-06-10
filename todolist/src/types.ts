export enum ACTION_TYPE_ENUM {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
}
export interface ITodoItem {
  id: string;
  name: string;
  desc: string;
  completed: boolean;
}
