import { Component } from '@angular/core';
import { CreditCalculatorModel } from '../../../models/calc.model';

@Component({
  selector: 'lmath-creditcalc',
  templateUrl: './creditcalc.view.html',
  styleUrls: ['./creditcalc.view.scss'],
})
export class CreditcalcView {
  model: CreditCalculatorModel = new CreditCalculatorModel();
  result?: number;
  resultOverpayment?: number;

  calculate() {
    this.result = this.model.calculate();
    this.resultOverpayment = this.model.calculateOverpayment(this.result);
  }
}
