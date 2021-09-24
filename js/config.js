class Config {
  static load(name) {
    return localStorage.getItem(name) || new Config(name);
  }
  constructor(name) {
    this.name = name;
    this.map = {};
  }
  add(title, group, color) {
    this.map[title] = {group, color};
  }

  save() {
    localStorage.setItem(this.name)
  };


  getColor(title) {
    return this.map[title].color ;
  }
  contains(title, group) {
    return this.map[title]?.group === group;
  }

}
