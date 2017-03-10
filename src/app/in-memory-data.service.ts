import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {
        id: 11, 
        name: 'Mr. Incredible', 
        age: 40, 
        antagon: "Syndrome",
        power: "superhuman strength",
        imgPath: "../../assets/hero-img/bob.jpg"        
      },
      {
        id: 12, name: 'Elastic Girl',
        age: 32, 
        antagon: "Syndrome",
        power: "stretchable body",
        imgPath: "../../assets/hero-img/helen.jpg"
      },
      {
        id: 13, 
        name: 'Jack Jack', 
        age: 1, 
        antagon: "Syndrome",
        power: "bursting into flame",
        imgPath: "../../assets/hero-img/jackjack.jpg"},
      {
        id: 14, 
        name: 'Violet', 
        age: 14, 
        antagon: "Syndrome",
        power: "invisibity",
        imgPath: "../../assets/hero-img/violet.jpg"
      },
      {
        id: 15, 
        name: 'Dash', 
        age: 10, 
        antagon: "Syndrome",
        power: "superspeed",
        imgPath: "../../assets/hero-img/dash.jpg"
      },
      {
        id: 16, 
        name: 'Frozono', 
        age: 40, 
        antagon: "Syndrome",
        power: "control over ice",
        imgPath: "../../assets/hero-img/lucius.jpg"
      },
      {
        id: 17, 
        name: 'Buzz', 
        age: "N/A", 
        antagon: "Zorg",
        power: "laser ray",
        imgPath: "../../assets/hero-img/buzz.jpg"
      },
      {
        id: 18, 
        name: 'Woody', 
        age: "N/A",
        antagon: "Stinky Pete",
        power: "to have a snake in his boot",
        imgPath: "../../assets/hero-img/woody.jpg"
      },      
      {
        id: 19, 
        name: 'Baymax', 
        age: "N/A", 
        antagon: "Yokai",
        power: "healthcare",
        imgPath: "../../assets/hero-img/baymax.jpg"
      },
      {
        id: 20, 
        name: 'MegaMind', 
        age: 25, 
        antagon: "Hal",
        power: "Genius-Level Intellect",
        imgPath: "../../assets/hero-img/megamind.jpg"
      }
    ];
    return {heroes};
  }
}
