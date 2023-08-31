import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next' 
import CopyrightYearContext from '@/context/CopyrightYearContext'

const CopyrightSection = () => {
  const { t } = useTranslation()
  const copyRightYear = useContext(CopyrightYearContext)
  return (
    <Box
      width="100%"
      bg="blackPearl"
      color="offwhite"
      pt={[4, 1]}
      pb={[0, 1]}
      pl={[5, 10]}
      paddingRight={[5, 24]}
    >
      <Flex justify="space-between">
        <Text
          size="sm"
          fontFamily="light"
          mr={[3, 10]}
          maxW={['150px', 'unset']}
          justifyContent="flex-start"
        >
          {t('footer:copyright-details', 'Copyright {{ copyRightYear }}', {
            copyRightYear,
          })}
        </Text> 
      </Flex>
    </Box>
  )
}

export default CopyrightSection