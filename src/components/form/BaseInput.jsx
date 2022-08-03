import { useId } from 'react'
import { clsx } from 'clsx'
import BaseLabel from './BaseLabel'

const BaseInput = (props) => {
  const {
    label,
    type = 'text',
    error = false,
    required = false,
    disabled = false,
    valid = false,
    className = '',
    errorText = '',
    rounded = 'lg',
    ...rest
  } = props;

  const id = useId();

  const styles = {
    base: 'border-transparent flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-700  shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent',
    state: {
      normal: 'placeholder-gray-400 border-gray-300 focus:ring-purple-600',
      error: 'border-red-600 focus:ring-red-600',
      valid: 'border-green-600 focus:ring-green-600',
      disabled: 'cursor-not-allowed bg-gray-100 shadow-inner text-gray-400'
    },
    rounded: {
      none: null,
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
    }
  }

  return (
    <div className={clsx('relative', className)}>
      {label && (
        <BaseLabel id={id}>
          {label} {required && '*'}
        </BaseLabel>
      )}
      <input
        id={id}
        type={type}
        className={clsx([styles.base,
        rounded && styles.rounded[rounded],
        error ? styles.state.error : styles.state.normal,
        valid ? styles.state.valid : styles.state.normal,
        disabled && styles.state.disabled
        ])}
        disabled={disabled}
        required={required}
        {...rest}
      />
      {error && <p className="mt-2 text-sm text-red-600">{errorText}</p>}
    </div>
  )
}

export default BaseInput;
