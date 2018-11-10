import React from 'react'
import LeashPrimary from '../images/svg/leash-primary.svg'
import LeashWhite from '../images/svg/leash-white.svg'
import LeashBlack from '../images/svg/leash-black.svg'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */
const Logos = {
  primary: <LeashPrimary height="36" width="36" />,
  white: <LeashWhite height="36" width="36" />,
  black: <LeashBlack height="36" width="36" />,
}

const Logo = ({ color = 'primary' }) => Logos[color]

export default Logo
