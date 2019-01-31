import CatController from "./components/cat/CatController.js";

class App {
  constructor() {
    this.controllers = {
      catController: new CatController()
    }
  }
}

window.app = new App() 