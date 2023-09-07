import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';

  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = "Can't display";
      return;
    }

    if (this.newMemberName.trim() != '') {
      this.members.push(this.newMemberName);
      this.newMemberName = '';
      this.errorMessage = '';
    }
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      return;
    }

    const allMembers = [...this.members];

    for (let i = 0; i < this.numberOfTeams; i++) {
      const randomIndex = Math.floor(Math.random() * allMembers.length);
      console.log(randomIndex);
    }
  }
}
