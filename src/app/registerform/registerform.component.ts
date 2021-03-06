import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  optionvalue = 'Address';
  formdata:any;
  constructor() { }
 url = "https://www.pngitem.com/pimgs/m/294-2947257_interface-icons-user-avatar-profile-user-avatar-png.png";
  ngOnInit(): void {
  }
  onChange(event) {
    this.optionvalue = event.target.value;
  }
  selectFile(event){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) =>{
        this.url = event.target.result
      }
    }
  }
  register(formobj){
    this.formdata = formobj;
    console.log(this.formdata);
  }
}
