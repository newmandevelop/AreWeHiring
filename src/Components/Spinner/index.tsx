import React from 'react'
import { Spin } from 'antd'

interface IProps {
  size: 'small' | 'default' | 'large'
}
const Spinner = ({ size }: IProps) => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Spin size={size} />
    </div>
  )
}

export default Spinner
