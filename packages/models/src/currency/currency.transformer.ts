import { type Currency, currencySchema } from './currency.model'

export class CurrencyTransformer {
  static toCurrency(number: number): Currency {
    return currencySchema.parse(number)
  }
}
