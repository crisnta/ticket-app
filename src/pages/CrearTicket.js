import { DownloadOutlined } from '@ant-design/icons'
import { Button, Col, Row, Typography } from 'antd'
import React, { useContext, useState } from 'react'
import { useHideMenu } from '../hooks/useHideMenu'
import { SocketContext } from '../context/SocketContext'

const { Title, Text } = Typography

export const CrearTicket = () => {

  const { socket } = useContext( SocketContext )

  const [ticket, setTicket] = useState(null)

  useHideMenu( true )
  
  const nuevoTicket = ( ) => {
    socket.emit('solicitar-ticket', null, (ticket) => {
      setTicket( ticket )
    })

  }

  return (
    <>
      <Row>
        <Col span={14} offset={6} align='center'>
          <Title>Presione el boton para nuevo ticket</Title>

          <Button
            type='primary'
            shape='round'
            icon={ <DownloadOutlined/> }
            size='large'
            onClick={nuevoTicket}
          >

            Nuevo Ticket
          </Button>
        </Col>
      </Row>

      { ticket && ( 
        <Row style={{ marginTop: 100}}>
        <Col span={14} offset={6} align="center">
          <Text level={2 }>
            Su numero 
          </Text>
          <br/>
          <Text level={2} type='success' style={{fontSize: 55}}>
            { ticket.numero}
          </Text>

        </Col>
      </Row>
      )}
      

    </>
  )
}
