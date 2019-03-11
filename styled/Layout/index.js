import styled from '@emotion/styled'

const Layout = props => {
  const StyledLayout = styled('div')({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  })

  return (
    <StyledLayout>
      { props.children }
    </StyledLayout>
  )
}

export default Layout
