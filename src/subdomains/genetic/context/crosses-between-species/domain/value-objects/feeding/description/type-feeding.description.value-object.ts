import { descriptionTypeFeeding } from './../../../../../../../../shared/validations/validation-description.type-feeding.validator';
import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
export class TypeFeeding extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }
  validateData(): void {
    this.DescriptionTypeFeeding();
  }

  private DescriptionTypeFeeding() {
    if (!descriptionTypeFeeding(this.value)) {
      this.setError({
        field: 'descriptionTypeFeeding',
        message:
          'La descripcion "descriptionTypeFeeding" del tipo de la comida no es valido',
      } as IErrorValueObject);
    }
  }
}
