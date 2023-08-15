import { useState, useCallback } from 'react';

import { regexName } from '../utils/regexConstants';

/**
 * Хук валидации формы.
 *
 * @returns {Object} Конфиг валидации
 */
function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChangeValidation = (evt) => {
    const { name, value } = evt.target;

    setValues({ ...values, [name]: value });

    if (
      name === 'name'
      && value !== ''
      && !regexName.test(value)
    ) {
      setErrors({ ...errors, [name]: 'Только латиница, кириллица, пробел или дефис.' });
      setIsValid(false);
    } else {
      setErrors({ ...errors, [name]: evt.target.validationMessage });
      setIsValid(evt.target.closest('form').checkValidity());
    }
  };

  const resetForm = useCallback((
    newValues = {},
    newErrors = {},
    newIsValid = false,
  ) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return {
    handleChangeValidation,
    errors,
    isValid,
    resetForm,
    setIsValid,
  };
}

export default useFormAndValidation;
