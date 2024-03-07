import { IFace } from './IFace';
import { FaceValues } from './FaceValues';

export class FaceValue implements IFace {
  private _faceValue: number = -1;
  private _faceName: string = '';
  public value: number = this._faceValue;
  public name: string = this._faceName;
  constructor(faceValue: FaceValues) {
    this.value = this._faceValue = faceValue;
    this.name = this._faceName = FaceValues[faceValue];
  }
}
