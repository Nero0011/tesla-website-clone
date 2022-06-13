import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title='Model S'
            description='Order Online for Touchless Delivery'
            backgroundImg='model-s.jpg'
            leftBtn='CUSTOM ORDER'
            rightBtn='EXISTING INVENTORY'
        />
        <Section 
            title='Model Y'
            description='Order Online for Touchless Delivery'
            backgroundImg='model-y.jpg'
            leftBtn='CUSTOM ORDER'
            rightBtn='EXISTING INVENTORY'
        />
        <Section 
            title='Model 3'
            description='Order Online for Touchless Delivery'
            backgroundImg='model-3.jpg'
            leftBtn='CUSTOM ORDER'
            rightBtn='EXISTING INVENTORY'
        />
        <Section 
            title='Model X'
            description='Order Online for Touchless Delivery'
            backgroundImg='model-x.jpg'
            leftBtn='CUSTOM ORDER'
            rightBtn='EXISTING INVENTORY'
        />
        <Section 
            title='Lowest Cost Solar Panels in America'
            description='Money-back guarantee'
            backgroundImg='solar-panel.jpg'
            leftBtn='ORDER NOW'
            rightBtn='LEARN MORE'
        />
        <Section 
            title='Solar Roof'
            description='Produce Clean Energy From Your Roof'
            backgroundImg='solar-roof.jpg'
            leftBtn='ORDER NOW'
            rightBtn='LEARN MORE'
        />
        <Section 
            title='Accessories'
            description=''
            backgroundImg='accessories.jpg'
            leftBtn='SHOP NOW'
        />
    </Container>
  )
}

export default Home

const Container = styled.div `
    height: 100vh;
`
