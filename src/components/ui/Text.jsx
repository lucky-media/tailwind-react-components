import { clsx } from 'clsx';

const Text = ({ size = 'base', variant = 'gray', as = 'p', className, children }) => {

  const Tag = as;

  const sizes = {
    sm: 'font-medium text-sm leading-normal',
    base: 'font-medium text-base leading-normal',
    lg: 'font-semibold text-lg md:text-2xl leading-relaxed'
  }

  const variants = {
    gray: 'text-gray-600',
    white: 'text-white',
    dark: 'text-gray-900'
  }

  return (
    <Tag className={clsx(sizes[size], variants[variant], className)}>
      {children}
    </Tag>
  )
}

export default Text;
