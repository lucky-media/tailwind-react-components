import { clsx } from "clsx"

const BaseLabel = ({ id, className, children }) => {
  return (
    <label
      className={clsx('block mb-2 text-base font-medium text-gray-700', className)}
      htmlFor={id}
    >
      {children}
    </label>
  )
}

export default BaseLabel;
