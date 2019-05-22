import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PmodelComponent } from './pmodel/pmodel.component';
import { RealWsRoutingModule } from './real-ws-routing.module';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatOptionModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
  MatSliderModule, MatSortModule, MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { CasesComponent } from './cases/cases.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [PmodelComponent, CasesComponent, StatisticsComponent],
  imports: [
    CommonModule,
      RealWsRoutingModule,
    ChartistModule,
    NgbModule,
    MatSliderModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatSortModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
  ]
})
export class RealWsModule { }
