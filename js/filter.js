class Filter {
  constructor() {
  }

  save() {
    localStorage.setItem(this.name)
  };
  has(name) {
    // return name == this.map.titre;
    return true;
  }

  static load(name) {
    return localStorage.getItem(name) || {};
  }
}
