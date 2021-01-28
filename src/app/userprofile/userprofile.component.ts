import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  allUsers: User[];
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.userservice.getAllUsers().subscribe(
      (data: User[]) =>{
        this.allUsers = data;
      });
  }
}
