import React from 'react'

export function Button({ asChild = false, children, className = '', variant, ...props }){
  if(asChild && React.isValidElement(children)){
    return React.cloneElement(children, { className: [children.props.className, className].filter(Boolean).join(' '), ...props })
  }
  return (
    <button className={className} {...props}>{children}</button>
  )
}

export default Button
