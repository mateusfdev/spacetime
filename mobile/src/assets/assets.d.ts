// declarando que todo arq png pode importar
declare module '*.png'

// entendendo que svg sao exportaçoes validas no react native
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
