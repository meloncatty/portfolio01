import styled from '@emotion/styled'

const Main = props => {
  const MainStyled = styled('main')({
    [props.mediaQuery[0]]: {
      width: '85%'
    },
    [props.mediaQuery[3]]: {
      width: '80%'
    }
  })

  return (
    <MainStyled>
      { props.children }
    </MainStyled>
  )
}

export default Main
