import CatService from "./CatService.js";

let _catService = new CatService()

function draw() {
  let cat = _catService.getCat()
  let template = `
  <h1>${cat.name}</h1>
  <img src="${cat.img}" alt="" srcset="">
  <h3>${cat.pets}</h3>
  <button type="button" class="btn btn-danger" onclick="app.controllers.catController.pet()  ">Pet</button>
  <button type="button" class="btn btn-success" onclick="app.controllers.catController.catnip()  ">Catnip</button>
  `
  document.querySelector("#cat").innerHTML = template
}

export default class CatController {
  constructor() {
    draw()
  }

  pet() {
    _catService.pet()
    draw()
  }

  catnip() {
    _catService.catnip()
  }

}