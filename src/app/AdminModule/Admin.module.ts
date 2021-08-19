import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplateComponent } from './AdminTemplate.component';
import { FilmsComponent } from './Film.component';
import { UserComponent } from './User.component';


//cau hinh route

const AdminRoute:Routes = [
    {path:'', component: AdminTemplateComponent, children:[
        {path:'user', component: UserComponent},
        {path:'film', component: FilmsComponent},
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(AdminRoute)],
    exports: [],
    declarations: [AdminTemplateComponent],
})
export class AdminModule { }
