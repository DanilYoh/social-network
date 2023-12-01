import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/alert';
import { Spinner } from '@chakra-ui/react';
import React from 'react';

interface IError {
  key: string;
  message: string;
  response?: { data?: any; status?: number };
}

interface IErrorLoaderProps {
  isLoading: boolean;
  errors: IError[];
}

const ErrorLoader: React.FC<IErrorLoaderProps> = ({ errors, isLoading }) => {
  if (errors.length) {
    return (
      <>
        {errors.map((item) => (
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>{item.message}</AlertDescription>
          </Alert>
        ))}
      </>
    );
  }
  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        data-testid="spinner"
      />
    );
  }
};

export default ErrorLoader;
