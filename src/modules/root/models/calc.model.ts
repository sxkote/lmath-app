export class CalcHelpers {
  static RoundDecimal(value: number, decimals: number = 2): number {
    const coefficient = Math.pow(10, decimals);
    return Math.round(value * coefficient) / coefficient;
  }
}

export interface ICalculatorModel {
  calculate: () => number;
}

export class CreditCalculatorModel implements ICalculatorModel {
  sum: number = 0;
  rate: number = 0;
  periods: number = 0;

  get monthRate() {
    return this.rate / 100 / 12;
  }

  calculate(): number {
    const monthRate = this.monthRate;
    const result = this.sum * (monthRate / (1 - Math.pow(1 + monthRate, -this.periods)));
    return CalcHelpers.RoundDecimal(result);
  }

  calculateOverpayment(payment: number): number {
    return CalcHelpers.RoundDecimal(payment * this.periods - this.sum);
  }
}
