import { Injectable } from "@angular/core"

@Injectable()
export class DataService {
  scrolled: any
  constructor() {
    this.scrolled = false
  }

  setScrolled(value) {
    this.scrolled = value
  }

  getScrolled() {
    return this.scrolled
  }
}
