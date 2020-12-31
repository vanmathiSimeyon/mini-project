import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [  
  { path: 'register', component: UserDetailComponent },  
  { path: 'userDetail', component: UserDetailComponent},
  { path: 'fileUpload', component: FileUploadComponent },
  { path: 'login', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
