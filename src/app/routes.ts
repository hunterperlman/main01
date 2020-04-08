import { Routes } from "@angular/router";

import { CatalogComponent } from "./catalog/catalog.component"
import { RegisterComponent } from "./newuser/newuser.component"
import { DatabaseComponent } from './database/database.component';
import { LoginComponent } from './login/login.component';

const AppRoutes : Routes = 
[
  { path : "", redirectTo : "/login", pathMatch: 'full' },
  { path : "register", component : RegisterComponent },
  { path : "login", component : LoginComponent },
  { path : "contacts", component : CatalogComponent },
  { path : "database", component : DatabaseComponent }
]

export {AppRoutes}
