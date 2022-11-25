import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <h1>AboutPage</h1>
      <p>This is where I tell you about why this is a baller as fuck idea</p>
      <p>
        <Link to={routes.home()}>Return Home</Link>
      </p>
    </>
  )
}

export default AboutPage
