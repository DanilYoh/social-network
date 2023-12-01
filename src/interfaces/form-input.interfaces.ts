import { InputProps } from '@chakra-ui/react';

import { BaseInput } from '@interfaces/form-fields.interfaces';

export interface InputField extends BaseInput<InputProps> {
  type: 'input';
}
