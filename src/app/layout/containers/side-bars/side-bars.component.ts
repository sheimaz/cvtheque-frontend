import { Component, Inject, OnInit, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-side-bars',
  templateUrl: './side-bars.component.html',
  styleUrls: ['./side-bars.component.css']
})
export class SideBarsComponent implements OnInit {

  @Input()mini :boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  public sidebarHover(): void {
    if (this.mini) {
      this.mini = false;
      this.document.getElementById("mySidebar")!.style.width = "250px";
      this.document.getElementById("logo-mini")!.style.display = "none";
      this.document.getElementById("logo")!.style.display = "block";
      
    } else {
      this.mini = true;
      this.document.getElementById("mySidebar")!.style.width = "85px";
      this.document.getElementById("logo-mini")!.style.display = "block";
      this.document.getElementById("logo")!.style.display = "none";
      
    }
}

}
