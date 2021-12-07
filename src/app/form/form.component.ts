import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog'
import { User } from './user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  firstName!: any;
  lastName!: any;
  email!: any;
  phone!: any;
  result!: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentList, {
      width: '800px',
      data: {firstName: this.firstName, lastName: this.lastName, email: this.email, phone: this.phone, title: 'Dialog Form with Stepper'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.firstName = this.result;
      console.log(result);
    });
  }
}

@Component({
  selector: 'dialog-content-list',
  templateUrl: 'list-details-modal.html',
  styleUrls: ['list-details-modal.css']

})
export class DialogContentList implements OnInit{
  // model = new User();
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;

  ngOnInit(): void {

  this.firstFormGroup = new FormGroup({
    firstName: new FormControl()
  });

  this.secondFormGroup = new FormGroup({
    lastName: new FormControl()
  });

  this.thirdFormGroup = new FormGroup({
    email: new FormControl()
  });

  this.fourthFormGroup = new FormGroup({
    phone: new FormControl()
  });
  }


  constructor(public dialogRef: MatDialogRef<DialogContentList>,
    @Inject(MAT_DIALOG_DATA) public data: User){

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

