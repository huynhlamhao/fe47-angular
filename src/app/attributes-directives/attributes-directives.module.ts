import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributesDirectivesComponent } from './attributes-directives.component';
import { HightlightDirectivesDirective } from './hightlight-directives.directive';

@NgModule({
  declarations: [AttributesDirectivesComponent, HightlightDirectivesDirective],
  imports: [CommonModule],
  exports: [AttributesDirectivesComponent],
})
export class AttributesDirectivesModule {}
