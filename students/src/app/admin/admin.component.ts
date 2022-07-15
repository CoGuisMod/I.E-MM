import { Component, OnInit } from "@angular/core";

@Component({
  selector: "redirect",
  template: "redirecting...",
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /* window.location.href = "example.url"; <----- Redireccionador */
  }
}
