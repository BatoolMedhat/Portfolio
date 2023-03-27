import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  show:boolean=true
nameValue:string=''
emailValue:string=''
phoneValue:string=''
messageValue:string=''
showName:boolean=true
showEmail:boolean=true
showPhone:boolean=true
showMessage:boolean=true

showNameInput(){
 
  this.nameValue == "Medhat" ?this.showName=true:this.showName=false
  this.nameValue == "" ?this.showName=true:""
  
}
showEmailInput(){
 
  this.emailValue == "Medhat@gmail.com" ?this.showEmail=true:this.showEmail=false
  this.emailValue == "" ?this.showEmail=true:""
  
}
showPhoneInput(){
 
  this.phoneValue == "01234567890" ?this.showPhone=true:this.showPhone=false
  this.phoneValue == "" ?this.showPhone=true:""
  
}
showMessageInput(){
 
  this.messageValue == "every thing is perfect" ?this.showMessage=true:this.showMessage=false
  this.messageValue == "" ?this.showMessage=true:""
  
}

}
