import styled from '@emotion/styled'

const ButtonLink = props => {
  const ButtonLinkStyled = styled('a')({
    border: '1px solid #3B3F4D',
    padding: 4,
    margin: '0 6px 0 0',
    textDecoration: 'none',
    color: '#3B3F4D',
    ':hover': {
      boxShadow: 'rgba(0, 0, 0, 0.32) 0px 6px 14px',
      transition: 'all 0.25s ease-in-out 0s'
    }
  })

  return (
    <ButtonLinkStyled {...props}>
      { props.children }
    </ButtonLinkStyled>
  )
}

export default ButtonLink
