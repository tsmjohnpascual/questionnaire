import React from 'react'
import './Text.css'

const Text = ({ className, children }) => {
  return (
    <p className={className}>{children}</p>
  )
}

export default Text
