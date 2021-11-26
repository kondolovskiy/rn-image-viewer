export interface IAction {
  type: string
}

export interface ILoginAction extends IAction {
  payload: {
    code: string,
    password: string
  }
}