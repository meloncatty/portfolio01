import styled from '@emotion/styled'

const SplashText = props => {
  const SplashTextWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: '"Crimson Text", sans-serif',
    span: {
      fontSize: 40
    },
    [props.mediaQuery[0]]: {
      height: 'auto',
      marginTop: 15,
      span: {
        fontSize: 30
      }
    },
    [props.mediaQuery[3]]: {
      height: 185
    }
  })

  return (
    <SplashTextWrapper>
      { props.children }
    </SplashTextWrapper>
  )
}

export default SplashText
