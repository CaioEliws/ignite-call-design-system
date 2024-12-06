import { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from '@ignite-ui/react/src/components/TextArea'
import { Box } from '@ignite-ui/react/src/components/Box'
import { Text } from '@ignite-ui/react/src/components/Text'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
      <Box as="label" css={{ display: 'flex',
        flexDirection: 'column', gap: '$2'
       }}>
        <Text size="sm">Observations</Text>
        {Story()}
        </Box>
      )
    }
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
 args: {
  placeholder: 'Add any observations...',
 }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
  disabled: true,
  },
}