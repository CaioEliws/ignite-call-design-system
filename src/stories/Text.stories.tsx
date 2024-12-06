import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react/src/components/Text'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus ut tenetur, sequi eveniet assumenda velit quia pariatur nihil unde suscipit odio dolore illo dolor fugiat id at amet eos.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}