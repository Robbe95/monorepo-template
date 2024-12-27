import type {
  UploadField,
} from 'payload'

export interface GetIconFragmentOptions {
  name: string
  label: string
}

export function getIconFragment({ name, label }: GetIconFragmentOptions): UploadField {
  return {
    name,
    label,
    relationTo: 'icons',
    required: true,
    type: 'upload',
  }
}
