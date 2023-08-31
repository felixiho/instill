 
import { Box } from '@chakra-ui/react'
import { ReactElement } from "react";
import { NextPageWithLayout } from './_app'


const Home: NextPageWithLayout = () => {

  return (
    <Box pb={20} as="section" >
      GLORYYYYY
    </Box>
  )
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <HomeProvider> 
//           {page} 
//       </HomeProvider>
//     </Layout>

//   )
// }

export default Home