import {
  ButtonLink,
  Footer,
  GlobalStyles,
  Layout,
  Main,
  NameWrapper,
  SplashText,
  WorkContent,
  WorkWrapper
} from '../styled'
import {
  cssCat,
  cssHeart,
  cssStar,
  cssLeaf
} from '../misc'

const breakpoints = [320, 375, 425, 768, 1024, 1200]

// TODO: unable to use em for breakpoints here
// investigate the reasons why
// argument for using em instead of px or rem:
// https://zellwk.com/blog/media-query-units/
const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

export default () =>
  <Layout mediaQuery={mq}>
    <Main role='main' mediaQuery={mq}>
      <GlobalStyles />
      <NameWrapper mediaQuery={mq}>
        <h2>krista handel</h2>
        { cssCat }
      </NameWrapper>
      <SplashText mediaQuery={mq}>
        <span>i'm a front end software engineer.</span>
        <span>currently residing in denver, co.</span>
        <span>let's build something together.</span>
        <div className='button-wrapper'>
          <ButtonLink href='mailto:k.handel66@gmail.com'>email</ButtonLink>
          <ButtonLink href='https://github.com/meloncatty' rel='noopener noreferrer'>github</ButtonLink>
          <ButtonLink href='https://linkedin.com/in/krista-handel/' rel='noopener noreferrer'>linkedin</ButtonLink>
          <ButtonLink href='https://open.spotify.com/user/_spooky_mulder' rel='noopener noreferrer'>spotify</ButtonLink>
        </div>
      </SplashText>
      <WorkWrapper mediaQuery={mq}>
        <div>
          <div className='work-heading'>
            <h3>projects</h3>
            { cssStar }
          </div>
          <WorkContent mediaQuery={mq}>
            <ul>
              <li>
                <a href='https://github.com/meloncatty/swapi-box' rel='noopener noreferrer'>swapi box</a>
              </li>
              <li>
                <a href='https://github.com/meloncatty/personal-project' rel='noopener noreferrer'>search open source</a>
              </li>
              <li>
                <a href='https://github.com/meloncatty/monikers' rel='noopener noreferrer'>monikers</a>
              </li>
            </ul>
          </WorkContent>
        </div>
        <div>
          <div className='work-heading'>
            <h3>open source</h3>
            { cssHeart }
          </div>
          <WorkContent mediaQuery={mq}>
            <ul>
              <li>
                <a href='https://github.com/sindresorhus/refined-github' rel='noopener noreferrer'>refined github</a>
              </li>
              <li>
                <a href='https://github.com/digitaltoad/vim-pug' rel='noopener noreferrer'>vim pug</a>
              </li>
              <li>
                <a href='https://github.com/secretnodes/secretnodesorg-full' rel='noopener noreferrer'>secretnodes.org</a>
              </li>
            </ul>
          </WorkContent>
        </div>
        <div>
          <div className='work-heading'>
            <h3>skills</h3>
            { cssLeaf }
          </div>
          <WorkContent mediaQuery={mq}>
            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
              <li>
                react
              </li>
              <li>
                redux
              </li>
              <li>
                node
              </li>
              <li>
                express
              </li>
              <li>
                github/git
              </li>
              <li>
                mocha/chai
              </li>
              <li>
                cypress
              </li>
              <li style={{ flexBasis: '62%' }}>
                html5/css3
              </li>
            </ul>
          </WorkContent>
        </div>
      </WorkWrapper>
      <Footer mediaQuery={mq}>
        <span>
          pixel art made with
          <a href='https://github.com/jvalen/pixel-art-react' rel='noopener noreferrer'> pixel art to css</a>
        </span>
      </Footer>
    </Main>
    <style jsx>{`
      h3 {
        margin: 0;
        padding: 10px 0;
      }
      li > a {
        margin: 3px 0;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        height 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      h2 {
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none;
        color: #3B3F4D;
      }
      .button-wrapper {
        margin-top: 20px;
      }
      .work-heading {
        display: flex;
        height: 35px;
      }
    `}
    </style>
  </Layout>
