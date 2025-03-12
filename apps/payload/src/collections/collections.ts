import { blogCollection } from '@payload/collections/blogs/blog.collection'
import { formCollections } from '@payload/collections/form/form.collections'
import { mediaCollections } from '@payload/collections/medias/media.collections'
import { pageCollections } from '@payload/collections/pages/page.collections'
import { userCollections } from '@payload/collections/users/user.collections'

export default [
  ...pageCollections,
  ...formCollections,
  ...userCollections,
  ...mediaCollections,
  blogCollection,
]
