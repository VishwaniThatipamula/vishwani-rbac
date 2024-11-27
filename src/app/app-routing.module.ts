import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { RolemanagementComponent } from './rolemanagement/rolemanagement.component';
import { PostuserComponent } from './postuser/postuser.component';
import { GetuserComponent } from './getuser/getuser.component';
import { UpdateComponent } from './update/update.component';
import { DeleteusersComponent } from './deleteusers/deleteusers.component';
import { PostroleComponent } from './postrole/postrole.component';
import { GetroleComponent } from './getrole/getrole.component';
import { DeleteroleComponent } from './deleterole/deleterole.component';
import { UpdatingrolesComponent } from './updatingroles/updatingroles.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'usermanage',component:UsermanagementComponent},
  {path:'rolemanage',component:RolemanagementComponent},
  {path:'post',component:PostuserComponent},
  {path:'getuser',component:GetuserComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteusersComponent},
  {path:'postrole',component:PostroleComponent},
  {path:'getrolee',component:GetroleComponent},
  {path:'deleterolee',component:DeleteroleComponent},
  {path:'updatrol',component:UpdatingrolesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
