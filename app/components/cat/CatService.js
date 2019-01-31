import Cat from "../../models/Cat.js";

let _cat = new Cat("Mr. Snibbley", 15, "https://ichef.bbci.co.uk/news/624/cpsprodpb/5D01/production/_95790832_gettyimages-516700094.jpg")

export default class CatService {

  constructor() { }

  getCat() {
    return _cat
  }

  pet() {
    if (_cat.pets < _cat.tolerance) {
      _cat.pets++
    }
  }

  catnip() {
    _cat.tolerance += 15
  }
}