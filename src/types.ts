export interface ITodo {
  id: number
  userId: number
  title: string
  completed: boolean
}

export interface IApi {
  fetch(url: string): Promise<any>
}
