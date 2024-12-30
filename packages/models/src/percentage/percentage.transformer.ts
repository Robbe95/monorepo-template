import {
  type Percentage,
  percentageSchema,
} from './percentage.model'

export class PercentageTransformer {
  static toPercentage(number: number): Percentage {
    return percentageSchema.parse(number)
  }
}
