// @ts-ignore
import { defineType, defineField } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'date', title: 'Publish Date', type: 'date' }),
    defineField({ name: 'readingTime', title: 'Reading Time (mins)', type: 'number' }),
  ],
});

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'image', title: 'Project Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] }),
    defineField({ name: 'url', type: 'url', title: 'Project URL' }),
    defineField({ name: 'featured', type: 'boolean', title: 'Featured' }),
  ],
});

export const schemaTypes = [post, project]; 