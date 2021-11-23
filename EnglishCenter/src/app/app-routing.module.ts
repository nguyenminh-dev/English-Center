import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'course', component:CourseComponent},
  {path:'support', component:SupportComponent},
  {path:'event', component:EventComponent},
  {path:'user', component:UserComponent},
  {path:'login', component:LoginComponent}

  // {path:'login', component:LoginComponent},
  // {
  //   path: '',
  //   component: Layout1Component,canActivate:[AuthGuard],
  //   children: [
  //     { path: '', component: HomeComponent, pathMatch: 'full'},
  //     { path: 'department', component: DepartmentComponent,
  //       // children:
  //       // [
  //       //   {path: 'update', component: DepartmentFormComponent}
  //       // ]
  //     },
  //     { path: 'user', component: UserComponent,
  //       // children:
  //       // [
  //       //   {path: 'create', component: UserFormComponent}
  //       // ]
  //     },
  //     {
  //       path: 'menu', component: MenuComponent,
  //       // children:
  //       // [
  //       //   {path: 'add', component: MenuFormComponent}
  //       // ]
  //     },
  //     { path: 'category', component: CategoryComponent,
  //     // children:
  //     // [
  //     //   {path: 'add', component: CategoryFormComponent}
  //     // ]
  //   },
  //     { path: 'waiter', component: OrderComponent},
  //     {path:'cashier',component:CashierComponent},
  //     {path:'bartender',component:BatenderComponent},
  //     {path: 'table', component: TableComponent}

//     ]
// }

];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export const AppRoutingModule = RouterModule.forRoot(routes);
