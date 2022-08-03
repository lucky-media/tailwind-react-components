import { clsx } from 'clsx';

const Card = ({ className, children }) => {
  return (
    <div className={clsx('overflow-hidden bg-white rounded-lg shadow', className)}>
      {children}
    </div>
  )
}

const Header = ({ className, children }) => {
  return (
    <div className={clsx('px-4 py-5 bg-white border-b border-gray-200 sm:px-6', className)}>
      {children}
    </div>
  )
}

const HeaderTitle = ({ className, as = 'h3', children }) => {
  const Tag = as;

  return (
    <Tag className={clsx('text-lg font-medium leading-6 text-gray-900', className)}>
      {children}
    </Tag>
  )
}

const Body = ({ className, children }) => {
  return (
    <div className={clsx('px-4 py-5 sm:p-6', className)}>
      {children}
    </div>
  )
}

const Footer = ({ variant = 'white', size = 'md', className, children }) => {

  const styles = {
    sizes: {
      sm: 'px-1 py-5 sm:px-2',
      md: 'px-4 py-5 sm:px-6',
      lg: 'px-4 py-8 sm:px-8',
    },
    variants: {
      white: 'bg-white border-t border-gray-200',
      dark: 'bg-gray-900 border-t border-gray-700',
      gray: 'bg-gray-50',
    }
  }


  return (
    <div className={clsx([
      styles.variants[variant],
      styles.sizes[size],
      className
    ])}>
      {children}
    </div>
  )
}

Card.Header = Header;
Card.Header.Title = HeaderTitle;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
