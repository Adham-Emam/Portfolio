import 'server-only'

import { Client } from '@notionhq/client'
import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { cache } from 'react'

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getProjects = cache(async () => {
  const res = await notionClient.databases.query({
    database_id: process.env.PROJECTS_ID!,
    filter: {
      property: 'Status',
      status: { equals: 'Published' },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  return res.results as PageObjectResponse[]
})

export const getFeaturedProjects = cache(async () => {
  const res = await notionClient.databases.query({
    database_id: process.env.PROJECTS_ID!,
    filter: {
      property: 'Featured',
      checkbox: {
        equals: true,
      },
    },
  })
  return res.results as PageObjectResponse[]
})

export const getPosts = cache(async () => {
  const res = await notionClient.databases.query({
    database_id: process.env.BLOG_ID!,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  return res.results as PageObjectResponse[]
})

export const getPostContent = cache(async (pageId: string) => {
  const res = await notionClient.blocks.children.list({ block_id: pageId })
  return res.results as BlockObjectResponse[]
})

export const getPostBySlug = cache(async (slug: string) => {
  const res = await notionClient.databases.query({
    database_id: process.env.BLOG_ID!,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  })
  return res.results[0] as PageObjectResponse | undefined
})

export const getEducation = cache(async () => {
  const res = await notionClient.databases.query({
    database_id: process.env.EDUCATION_ID!,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  return res.results as PageObjectResponse[]
})

export const getExperience = cache(async () => {
  const res = await notionClient.databases.query({
    database_id: process.env.EXPERIENCE_ID!,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  return res.results as PageObjectResponse[]
})
