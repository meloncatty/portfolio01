import styled from '@emotion/styled'

const WorkContent = props => {
  const WorkContentStyled = styled('div')({
    borderTop: '2px solid #3B3F4D',
    borderLeft: '2px solid #3B3F4D',
    borderRight: '2px solid #3B3F4D',
    padding: 5,
    [props.mediaQuery[0]]: {
      width: 'auto'
    },
    [props.mediaQuery[3]]: {
      width: 240
    }
  })

  return (
    <WorkContentStyled>
      { props.children }
    </WorkContentStyled>
  )
}

export default WorkContent
