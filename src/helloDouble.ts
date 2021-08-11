import { hello } from './hello'

export const doubleDouble = () => {
  return [hello(), hello()]
}
