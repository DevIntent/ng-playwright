import { ApplicationScreen } from './screen.js';

export class MainScreen extends ApplicationScreen {
  // The path to this screen, relative to the base URL of the
  // application
  static path = '/';

  header = this.locatorFor('h1');
}
