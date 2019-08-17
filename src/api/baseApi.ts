export class BaseApi {
  protected baseUrl: string = 'https://jsonplaceholder.typicode.com/'
  async fetch(url: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}${url}`)
    return await response.json()
  }
}
