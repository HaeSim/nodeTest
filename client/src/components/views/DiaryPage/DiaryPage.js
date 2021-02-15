import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

function DiaryPage(props) {
  const user = useSelector(state => state.user)

  return (
    <Timeline mode="alternate">
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="green">
        Solve initial network problems 2015-09-01
      </Timeline.Item>
      <Timeline.Item
        dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
      ></Timeline.Item>
      <Timeline.Item color="red">
        Network problems being solved 2015-09-01
      </Timeline.Item>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
        Technical testing 2015-09-01
      </Timeline.Item>
    </Timeline>
  )
}

export default withRouter(DiaryPage)
