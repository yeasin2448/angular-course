import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameInputField = "";
  names : string[] = [];
  errorMessage = ""

 addMember() {
  // console.log("click event");

  if(!this.nameInputField) {
    this.errorMessage = ("Can't display")
    return
  }

  if(this.nameInputField.trim() !=""){
    this.names.push(this.nameInputField);
    this.nameInputField = "";
  }
  
 }
}
