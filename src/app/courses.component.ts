import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
// import { ConsoleReporter } from 'jasmine';

@Component({
    selector: 'courses',
    template: `<h2>{{"Title: " + liki() }}</h2>
        <h4 [textContent]="title"></h4>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>

        <table>
            <tr>
                <td [attr.colspan]="col_span">1</td>
            </tr>
        </table>

        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <div (click)="onDivClick()">
        <button (click)="onClickEvent($event)">Event Binding</button>
        </div>

        <div [class.col-lg-2]="isActive" [style.backgroundColor]="isActive ? 'yellow' : 'red'">Likhith</div>

        <input (keyup.enter)="onkeyUp($event)" />
        <br>
        <input #email (keyup.enter) = "getTextValue(email.value)" />
        <br>
        <input [value]="emaill" (keyup.enter) = "emaill = $event.target.value; twoWayBinding()" />
        <br/>
        <input [(ngModel)]="emaill1" (keyup.enter) = "twoWayBindingOneMoreMethod()" />
        <br/>

        {{ course.title | uppercase | lowercase }} <br/>
        {{ course.rating | number: '3.1-1' }} <br/>
        {{ course.students | number }} <br/>
        {{ course.price | currency:'INR':true:'2.1-1' }} <br/>
        {{ course.relasedate | date:'shortDate'}} <br/>

        {{ pipeText | summary:'10' }}
    `
})

export class CoursesComponent {
    title = 'List of courses';
    col_span = 2;
    isActive = true;
    courses; 
    constructor(services: CoursesService) {
        // let services = new CoursesService();
        this.courses = services.getCourses();
    }

    liki() {
        return this.title;
    }

    onClickEvent ($event) {
        $event.stopPropagation();
        console.log("Event Binding bitton is clicked", $event);
    }

    onDivClick () {
        console.log("Div Clicked");
    }

    onkeyUp($event) {
        // if($event.keyCode == 13)    //when user press the enter key
        console.log("text is entered");
        console.log($event.target.value);
    }

    getTextValue(email) {       //template variable
        console.log(email);
    }
    
    emaill = "liki@gmail.com";
    twoWayBinding() {
        console.log(this.emaill);
    }

    emaill1 = "liki@gmail.com";

    twoWayBindingOneMoreMethod() {
        console.log(this.emaill1);
    }

    course = {
        title: "Hi my Name is Likhith",
        rating: 43.985,
        students: 30955,
        price: 190.50,
        relasedate: new Date(2019, 11, 13)
    }

    pipeText = "hi my name is likhith he is very goog buy and look wise he is very handsome.And also he is hero"
    
}