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
    // if (! this.map[title]) return "rgb(120, 119, 231)";
    return this.map[title].color ;
  }
  contains(title, group) {
    return this.map[title]?.group === group;
  }

}
