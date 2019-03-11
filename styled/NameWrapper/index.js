import styled from '@emotion/styled'

const NameWrapper = props => {
  const NameDiv = styled('div')({
    borderBottom: '1.5px solid #3B3F4D',
    display: 'flex',
    padding: '10px 0',
    marginTop: 0,
    [props.mediaQuery[4]]: {
      marginTop: '8rem'
    }
  })

  return (
    <NameDiv>
      { props.children }
    </NameDiv>
  )
}

export default NameWrapper
