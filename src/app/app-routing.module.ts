import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { ShearchComponent } from './pages/shearch/shearch.component';
import { BranchComponent } from './pages/branch/branch.component';
import { ProductComponent } from './pages/product/product.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';

// tslint:disable-next-line: variable-name
const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termino', component: ShearchComponent },
    { path: 'branch', component: BranchComponent },
    { path: 'product', component: ProductComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, { useHash: true }),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
