import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@ignite-ui/react/src/components/CheckBox'
import { Box } from '@ignite-ui/react/src/components/Box'
import { Text } from '@ignite-ui/react/src/components/Text'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
      <Box as="label" css={{ display: 'flex',
        flexDirection: 'row', gap: '$2'
       }}>
        {Story()}
        <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}