import { Flex } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Flex gap="middle" vertical>
        404 Not Found

        <Link to="/">HomePage from Link (reactRouterDom)</Link>
        <a href='/'>HomePage from Anchor Tag</a>
    </Flex>
  )
}
