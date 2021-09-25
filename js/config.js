class Config {
  constructor(name) {
    this.name = name;
    this.load();
  }
  add(title, group, color) {
    this.map[title] = {group, color};
  }

  load() {
    this.map = localStorage.getItem(this.name) || preset[this.name];
  }
  save() {
    localStorage.setItem(this.name, JSON.stringify(this.map))
  };


  getColor(title) {
    return this.map[title].color ;
  }
  contains(title, group) {
    return group===null || this.map[title]?.group === group;
  }

}
