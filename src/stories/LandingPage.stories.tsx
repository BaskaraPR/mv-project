import type { Meta, StoryObj } from '@storybook/react'
import LandingPage from './LandingPage'

const meta: Meta<typeof LandingPage> = {
  title: 'Pages/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof LandingPage>

export const Default: Story = {}