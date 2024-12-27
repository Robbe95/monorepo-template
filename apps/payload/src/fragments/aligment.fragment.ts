import type {
  Field,
  SelectField,
} from 'payload'

export function getAligmentFragment(): SelectField {
  const field: Field = {
    name: 'aligment',
    dbName: 'aligment',
    options: [
      {
        label: 'Left-To-Right',
        value: 'leftToRight',
      },
      {
        label: 'Right-To-Left',
        value: 'rightToLeft',
      },
    ],
    required: true,
    type: 'select',
  }

  return field
}
