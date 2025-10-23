import 'server-only'

import { Client } from '@notionhq/client'
import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getProjects = async () => {
  const res = await notionClient.databases.query({
    database_id: process.env.PROJECTS_ID!,
    filter: {
      and: [
        {
          property: 'Status',
          status: { equals: 'Published' },
        },
        {
          property: 'Featured',
          checkbox: {
            equals: false,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  return res.results as PageObjectResponse[]
}

export const getFeaturedProjects = async () => {
  const res = await notionClient.databases.query({
    database_id: process.env.PROJECTS_ID!,
    filter: {
      and: [
        {
          property: 'Status',
          status: {
            equals: 'Published',
          },
        },
        {
          property: 'Featured',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  })
  return res.results as PageObjectResponse[]
}

export const getPostContent = async (pageId: string) => {
  const res = await notionClient.blocks.children.list({ block_id: pageId })
  return res.results as BlockObjectResponse[]
}

export const getEducation = async () => {
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
}

export const getExperience = async () => {
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
}

export const getNowData = async () => {
  const res = await notionClient.databases.query({
    database_id: process.env.NOW_ID!,
    filter: {
      and: [
        {
          property: 'Status',
          status: {
            does_not_equal: 'Completed',
          },
        },
        {
          property: 'Status',
          status: {
            does_not_equal: 'Archived',
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })
  return res.results as PageObjectResponse[]
}

export const getNowItemById = async (id: string) => {
  const page = await notionClient.pages.retrieve({
    page_id: id,
  })

  return page as PageObjectResponse
}

export const getTechnologies = async () => {
  const res = await notionClient.databases.query({
    database_id: process.env.TECHNOLOGIES_ID!,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
    sorts: [
      {
        property: 'ID',
        direction: 'ascending',
      },
    ],
  })
  return res.results as PageObjectResponse[]
}
