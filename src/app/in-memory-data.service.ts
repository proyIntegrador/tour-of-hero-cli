import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Incredible'},
      {id: 12, name: 'Elastic Girl'},
      {id: 13, name: 'Jack Jack'},
      {id: 14, name: 'Violet'},
      {id: 15, name: 'Dash'},
      {id: 16, name: 'Frozono'},
      {id: 17, name: 'Buzz'},
      {id: 18, name: 'Woody'},
      {id: 19, name: 'Baymax'},
      {id: 20, name: 'MegaMind'}
    ];
    return {heroes};
  }
}
