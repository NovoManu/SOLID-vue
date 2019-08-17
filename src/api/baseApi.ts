export class BaseApi {
  protected baseUrl: string = 'https://jsonplaceholder.typicode.com/'
  async fetch(url: string): Promise<any> {}
}
