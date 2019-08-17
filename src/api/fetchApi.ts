import { BaseApi } from '@/api/baseApi'

export class FetchApi extends BaseApi {
  constructor() {
    super()
  }
  async fetch(url: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}${url}`)
    return await response.json()
  }
}
