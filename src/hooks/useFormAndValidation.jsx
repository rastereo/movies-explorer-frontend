import { useState, useCallback } from 'react';

import regexName from '../utils/regexConstants';

/**
 * Хук валидации формы.
 *
 * @returns {Object} Конфиг валидации
 */
function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChangeValidation = (e) => {
    const { name, value } = e.target;

    if (
      name === 'name'
      && value !== ''
      && !regexName.test(value)
    ) {
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: 'Только латиница, кириллица, пробел или дефис.' });
      setIsValid(false);
    } else {
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: e.target.validationMessage });
      setIsValid(e.target.closest('form').checkValidity());
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
