import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SelectItem} from '../../components/common/selectitem';
import {MessageService} from '../../components/common/messageservice';
import {LoginDto} from './dto/loginDto';
import {LoginService} from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [MessageService]
})
export class LoginComponent implements OnInit {

    userform: FormGroup;

    submitted: boolean;

    genders: SelectItem[];

    description: string;

    credentials: LoginDto = new LoginDto('', '');

    @Output() voted = new EventEmitter<any>();

    constructor(private fb: FormBuilder, private messageService: MessageService, private loginService: LoginService) {
    }

    ngOnInit() {
        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl(''),
            'gender': new FormControl('', Validators.required)
        });

        this.genders = [];
        this.genders.push({label: 'Select Gender', value: ''});
        this.genders.push({label: 'Male', value: 'Male'});
        this.genders.push({label: 'Female', value: 'Female'});
    }

    onSubmit(value: string) {
        this.submitted = true;
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'Form Submitted'});
    }

    get diagnostic() {
        return JSON.stringify(this.userform.value);
    }

    login() {
        this.loginService.login(this.credentials).subscribe(e => {
            this.voted.emit(e)
        }, err => {
            this.voted.emit(null)
        });
    }
}
