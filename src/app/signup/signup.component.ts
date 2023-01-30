import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public signupForm !: FormGroup;
  constructor (private formBuilder:FormBuilder,private http: HttpClient,private router:Router){}
  
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username:[''],
      phone:[''],
      password:[''],
      privilege:[''],
    })
  }
  
  signup(){
    if(this.signupForm.controls["username"].value != ''){
      if(this.signupForm.controls["phone"].value != ''){
          if(this.signupForm.controls["password"].value != ''){
            this.signupForm.controls["privilege"].setValue('user')
            this.http.post<any>("http://localhost:4000/User",this.signupForm.value).subscribe(
              res=>{
                console.log(res)
                alert("successful!")
                this.signupForm.reset()
                this.router.navigate(['login'])
            },err=>{
              console.log(err)
              alert("Error!")
            })
          }else{
            alert("Password Required!")
          }
      }else{
        alert("Phone Required!")
      }
    }else{
      alert("Username Required!")
    }
  }
}
