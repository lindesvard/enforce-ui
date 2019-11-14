import React from 'react'
import { Column } from '../Structure'
import Spacer from '../Spacer'
import { Text, Heading, Display } from './'

export default {
  title: 'Typography',
}

export const _Text = () => {
  return (
    <Column>
      <Text thin xsmall>This is xsmall Text</Text>
      <Text thin small>This is small Text</Text>
      <Text thin>This is normal Text</Text>
      <Text thin large>This is large Text</Text>
      <Text thin xlarge>This is xlarge Text</Text>
      <Spacer />
      <Text xsmall>This is xsmall Text</Text>
      <Text small>This is small Text</Text>
      <Text>This is normal Text</Text>
      <Text large>This is large Text</Text>
      <Text xlarge>This is xlarge Text</Text>
      <Spacer />
      <Text medium xsmall>This is xsmall Text</Text>
      <Text medium small>This is small Text</Text>
      <Text medium>This is normal Text</Text>
      <Text medium large>This is large Text</Text>
      <Text medium xlarge>This is xlarge Text</Text>
      <Spacer />
      <Text bold xsmall>This is xsmall Text</Text>
      <Text bold small>This is small Text</Text>
      <Text bold>This is normal Text</Text>
      <Text bold large>This is large Text</Text>
      <Text bold xlarge>This is xlarge Text</Text>
    </Column>
  )
}

export const _TextAsParagraph = () => {
  return (
    <Column>
      <Text paragraph xsmall>This is xsmall Text</Text>
      <Text paragraph small>This is small Text</Text>
      <Text paragraph>This is normal Text</Text>
      <Text paragraph large>This is large Text</Text>
      <Text paragraph xlarge>This is xlarge Text</Text>
    </Column>
  )
}

export const _Heading = () => {
  return (
    <Column>
      <Heading small>This is small Heading</Heading>
      <Heading>This is normal Heading</Heading>
      <Heading large>This is large Heading</Heading>
    </Column>
  )
}

export const _Display = () => {
  return (
    <Column>
      <Display small>This is small Display</Display>
      <Display>This is normal Display</Display>
      <Display large>This is large Display</Display>
    </Column>
  )
}
