import { useState } from 'react'

import { Meta } from '@storybook/react'
import { JSX } from 'react/jsx-runtime'

import { Checkbox, CheckboxProps } from './checkbox.tsx'

import { VerticalContainer } from '@/utils/containers/vertical.tsx'
import { ValuePreview } from '@/utils/preview/preview.tsx'

export default {
  title: 'Components/Data Entry/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

export const Default = {
  render: (args: JSX.IntrinsicAttributes & CheckboxProps) => {
    const [checked, setChecked] = useState(true)

    return (
      <VerticalContainer>
        <Checkbox {...args} checked={checked} onChange={setChecked} />
        {/*<ValuePreview>checked: {String(checked)}</ValuePreview>*/}
      </VerticalContainer>
    )
  },

  args: {
    label: '',
    disabled: false,
  },
}
export const DefaultWhithLabel = {
  render: (args: JSX.IntrinsicAttributes & CheckboxProps) => {
    const [checked, setChecked] = useState(true)

    return (
      <VerticalContainer>
        <Checkbox {...args} checked={checked} onChange={setChecked} />
        <ValuePreview>checked: {String(checked)}</ValuePreview>
      </VerticalContainer>
    )
  },

  args: {
    label: 'Click here',
    disabled: false,
  },
}
