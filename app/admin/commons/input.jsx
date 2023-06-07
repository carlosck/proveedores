import { useFormContext } from 'react-hook-form';
import { findInputError, isFormInvalid } from './form'

export const Input = ({
    name,
    label,
    type,
    id,
    placeholder,
    validation,
    multiline,
    className,
  }) => {
    const {
      register,
      formState: { errors },
    } = useFormContext()
  
    const inputErrors = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputErrors)
  
    const input_tailwind =
      'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60'
  
    return (
      <div className={'flex flex-col w-full gap-2'}>
        <div className="flex justify-between">
          <label htmlFor={id} className="font-semibold capitalize">
            {label}
          </label>
          
            {isInvalid && (
              <InputError
                message={inputErrors.error.message}
                key={inputErrors.error.message}
              />
            )}
          
        </div>
        {multiline ? (
          <textarea
            id={id}
            type={type}
            className={'min-h-[10rem] max-h-[20rem] resize-y'}
            placeholder={placeholder}
            {...register(`${name}`, validation)}
          ></textarea>
        ) : (
          <input
            id={id}
            type={type}            
            placeholder={placeholder}
            {...register(name, validation)}
          />
        )}
      </div>
    )
  }

  const InputError = ({ message }) => {
    return (
      <p
        className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
        {...framer_error}
      >
        
        {message}
      </p>
    )
  }
  
  const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  }