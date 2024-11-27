import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { RolemanagementComponent } from './rolemanagement/rolemanagement.component';
import { GetuserComponent } from './getuser/getuser.component';
import { PostuserComponent } from './postuser/postuser.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { DeleteusersComponent } from './deleteusers/deleteusers.component';
import { DeleteroleComponent } from './deleterole/deleterole.component';
import { PostroleComponent } from './postrole/postrole.component';
import { GetroleComponent } from './getrole/getrole.component';
import { CommonModule } from '@angular/common';
import { UpdatingrolesComponent } from './updatingroles/updatingroles.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsermanagementComponent,
    RolemanagementComponent,
    GetuserComponent,
    PostuserComponent,
    UpdateComponent,
    DeleteusersComponent,
    DeleteroleComponent,
    PostroleComponent,
    GetroleComponent,
    UpdatingrolesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
