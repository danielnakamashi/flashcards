import * as React from 'react'
import LinkNext from 'next/link'
import LinkUI from '@material-ui/core/Link'

const Link = (props: React.ComponentProps<typeof LinkUI>) => (
  <LinkNext href={props.href}>
    <LinkUI {...props} />
  </LinkNext>
)

export { Link }
