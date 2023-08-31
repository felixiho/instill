import { extendTheme } from '@chakra-ui/react'


export const colors = {
    brand: "#8B919F",
}


const theme = extendTheme({
  fonts: {
    heading: `Outfit, sans-serif`,
    body: `Outfit, sans-serif`,
  },
  colors
})

export default theme