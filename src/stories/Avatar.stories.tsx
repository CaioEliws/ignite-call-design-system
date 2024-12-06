import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react/src/components/avatar/index'

export default {
title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/caioeliws.png',
    alt: 'Caio Elias',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined, 
  }
}