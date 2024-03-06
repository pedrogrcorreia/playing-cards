import { IFace } from './IFace';
import { FaceValues } from './FaceValues';

export class FaceValue implements IFace {
  constructor(public value: FaceValues, public name: string) {}
}
