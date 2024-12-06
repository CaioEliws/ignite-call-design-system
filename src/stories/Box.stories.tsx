import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react/src/components/Box'
import { Text } from '@ignite-ui/react/src/components/Text'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: (
        <>
            <Text>Testando o elemento Box</Text>
        </>
    )
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}