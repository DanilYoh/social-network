import { SelectProps } from '@chakra-ui/react';

import { BaseInput } from '@interfaces/form-fields.interfaces';

export type Option = { value: string; label: string };

interface SelectFieldBase extends BaseInput<SelectProps> {
  type: 'select';
}

type SelectVersions = 'destinations';

export interface CustomSelect extends SelectFieldBase {
  options: Option[];
  version: 'custom';
}

export interface VersionSelect extends SelectFieldBase {
  version: SelectVersions;
}

export type SelectField = CustomSelect | VersionSelect;
