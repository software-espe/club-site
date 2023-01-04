import { useState } from 'react';

export const useForm = <T extends Record<string, unknown>>(
  initialState: T,
  modifiedState?: T
) => {
  const [values, setValues] = useState(
    formatModel(initialState, modifiedState)
  );

  return {
    values,
    setValues
  };
};
const formatModel = <T extends Record<string, any>>(
  initialState: T,
  modifiedState?: T
): T => {
  if (!modifiedState) {
    return initialState;
  }

  const model: T = Object.assign(initialState);

  Object.entries(modifiedState).forEach(([key, value]) => {
    if (value) {
      model[key as keyof T] = value;
    }
  });

  return model;
};
