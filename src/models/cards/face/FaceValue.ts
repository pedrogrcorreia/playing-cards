import { IFace } from './IFace';
import { FaceValues } from './FaceValues';

export class FaceValue implements IFace {
  public value!: number;
  public name!: string;

  constructor({ faceValue = FaceValues.ACE }: { faceValue?: FaceValues } = {}) {
    this.value = faceValue.value;
    this.name = faceValue.name;
  }

  static availableFaces() {
    return Object.values(FaceValues);
  }

  toJSON() {
    return this.name;
  }
}
