import { NgModule } from '@angular/core';
import {
  MatSliderModule,
  MatButtonModule,
  MatChipsModule,
  MatCheckboxModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatRadioModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatChipsModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatRadioModule,
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatChipsModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatRadioModule,
  ]
})
export class MaterialModule {}
