import { Meta, StoryObj } from '@storybook/react'
import { MultiStep, MultiStepProps } from '@ignite-ui/react/src/components/MultiStep'
import { Box } from '@ignite-ui/react/src/components/Box'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
      <Box as="label" css={{ display: 'flex',
        flexDirection: 'column', gap: '$2'
       }}>
        {Story()}
        </Box>
      )
    }
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
 args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
 }
 