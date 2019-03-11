import styled from '@emotion/styled'

const WorkWrapper = props => {
  const WorkWrapperStyled = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
    [props.mediaQuery[0]]: {
      width: 'auto',
      height: 250,
      flexDirection: 'column'
    },
    [props.mediaQuery[3]]: {
      height: 'auto',
      flexDirection: 'row',
      width: 550,
      flexWrap: 'wrap'
    },
    [props.mediaQuery[4]]: {
      flexWrap: 'no-wrap',
      width: '100%'
    }
  })

  return (
    <WorkWrapperStyled>
      { props.children }
    </WorkWrapperStyled>
  )
}

export default WorkWrapper
