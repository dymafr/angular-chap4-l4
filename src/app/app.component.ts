import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public fruit: string = "";
  public fruits: string[] = ["fraise", "kiwi"];

  public addFruit() {
    this.fruits.push(this.fruit);
    this.fruit = "";
  }

  public deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter(f => f !== fruit);
  }
}
