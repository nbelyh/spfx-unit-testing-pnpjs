import { sp } from '@pnp/sp';
import '@pnp/sp/webs';

export class SomeService {

  public static someMethod() {
    return true;
  }

  public static async getWebTitle() {
    const web = await sp.web.get();
    return web.Title;
  }

}
