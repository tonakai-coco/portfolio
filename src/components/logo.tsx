import Link from 'next/link'
import { Text, Image, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 16px;

  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
  const logoImg = `/logo_mark${useColorModeValue('-dark', '')}.png`
  return (
    <Link href="/">
      <LogoBox>
        <Image src={logoImg} width={12} height={12} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Yoshinori Kashimura
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
