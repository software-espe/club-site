import { useState } from 'react';

const useForm = <T extends Record<string, unknown>>(
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
const formatModel = <T extends Record<string, unknown>>(
  initialState: T,
  modifiedState?: T
): T => {
  if (!modifiedState) {
    return initialState;
  }

  const model = Object.assign(initialState);

  Object.entries(modifiedState).forEach(([key, value]) => {
    if (value) {
      model[key as keyof T] = value;
    }
  });

  return model;
};

// ts-prune-ignore-next
export default useForm;
