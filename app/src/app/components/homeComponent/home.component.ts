/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { todoList } from 'app/sd-services/todoList';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {

    todoData: [] = [];

    constructor( private todolistService: todoList ) {
        super();
    }

    ngOnInit() {
        this.todolistService.getTodos().then( res =>{
            this.todoData = res.local.result
            console.log(this.todoData)
        })
    }
}
