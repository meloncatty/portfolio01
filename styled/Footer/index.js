import styled from '@emotion/styled'

const Footer = props => {
  const FooterStyled = styled('footer')({
    width: '80%',
    marginTop: 50,
    span: {
      fontSize: 12
    },
    [props.mediaQuery[0]]: {
      width: 'auto',
      margin: '120px 0'
    },
    [props.mediaQuery[3]]: {
      margin: '40px 0'
    }
  })

  return (
    <FooterStyled>
      { props.children }
    </FooterStyled>
  )
}

export default Footer
