import { IApi } from '@/types'

export class BaseApi implements IApi {
  protected baseUrl: string = 'https://jsonplaceholder.typicode.com/'
  async fetch(url: string): Promise<any> {}
}
