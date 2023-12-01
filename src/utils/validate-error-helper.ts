import * as Yup from 'yup';

export const validateErrorHelper = {
  isString: () => Yup.string(),
  textRequired: (text = 'please complete field') => Yup.string().required(text),
  optionRequired: (text = 'please select value') => Yup.string().required(text),
};
