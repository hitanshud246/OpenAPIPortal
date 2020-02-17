import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"]
})
export class FaqComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const items = document.querySelectorAll(".accordion a");

    function toggleAccordion() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }

    items.forEach(item => item.addEventListener("click", toggleAccordion));
  }
}
