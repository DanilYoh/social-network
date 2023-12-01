import { Button, VStack } from '@chakra-ui/react';
import { FC, FormEvent } from 'react';

import { makeTypedEntries } from '@utils/helpers.utils';
import { FieldV2 } from '@components/FormCommon/FieldV2';
import { FieldsObject } from '@interfaces/form-unions.interfaces';

export type HandleSubmit = (e?: FormEvent<HTMLFormElement>) => void;

type FormInner<T extends string = string> = {
  handleSubmit: HandleSubmit;
  items: FieldsObject<T>;
  buttonText: string;
  isLoading: boolean;
};

const FormInner: FC<FormInner> = ({
  handleSubmit,
  items,
  buttonText,
  isLoading,
}) => (
  <form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
    <VStack spacing={4} align="flex-start">
      {makeTypedEntries(items).map(([key, item]) => (
        <FieldV2 isLoading={isLoading} key={key} name={key} item={item} />
      ))}
      <Button
        type="submit"
        colorScheme="gray"
        height="2.5rem"
        borderRadius="0.125rem"
        boxShadow="0 0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)"
        width="full"
        isLoading={isLoading}
      >
        {buttonText}
      </Button>
    </VStack>
  </form>
);

export default FormInner;
