import { IFace } from './IFace';
import { FaceValues } from './FaceValues';

export class FaceValue implements IFace {
  public value!: number;
  public name!: string;

  constructor({ faceValue = FaceValues.ACE }: { faceValue?: FaceValues } = {}) {
    this.value = faceValue;
    this.name = FaceValues[faceValue];
  }
}
