import { Routes } from "@angular/router";

import { CatalogComponent } from "./catalog/catalog.component"
import { LoginComponent } from "./newuser/newuser.component"
import { DatabaseComponent } from './database/database.component';

const AppRoutes : Routes = 
[
  { path : "", redirectTo : "/login", pathMatch: 'full' },
  { path : "login", component : LoginComponent },
  { path : "catalog", component : CatalogComponent },
  { path : "database", component : DatabaseComponent }
]

export {AppRoutes}
