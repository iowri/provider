export class Helper {
  static dirname(path) {
    return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');;
  }
}
