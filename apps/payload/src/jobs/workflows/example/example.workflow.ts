/* eslint-disable no-console */
import type { WorkflowConfig } from 'payload'

export const exampleWorkflow: WorkflowConfig<'exampleWorkflow'> = {
  handler: async ({ tasks }) => {
    const output = await tasks.exampleTask('1', { input: { title: 'Example Task' } })

    console.log('workflow output', output)
  },
  // The arguments that the workflow will accept
  inputSchema: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
  ],
  slug: 'exampleWorkflow',
}
