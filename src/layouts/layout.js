import React from 'react'
import { RootLayout } from '../styles/styled-components'

// image 
import bgImage from '../assets/images/bgimage.jpg'

const layout = ({children}) => {
  return (
    <>
      <RootLayout bgImage={bgImage}>
        <main>
          {children}
        </main>
      </RootLayout>
    </>
  )
}

export default layout
