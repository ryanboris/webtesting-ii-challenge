import React from 'react'
import Button from './Button'
import styled from 'styled-components'

const DashboardWrapper = styled.div`
  padding: 50px;
  button {
    margin: 20px 0;
  }
`

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <Button children="Hit" />
      <Button children="Strike" />
      <Button children="Foul" />
      <Button children="Ball" />
    </DashboardWrapper>
  )
}
