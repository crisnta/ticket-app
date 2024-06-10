import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';
import { getUltimos } from '../helpers/getUltimos';



const { Title, Text } = Typography

export const Cola = () => {

  useHideMenu( true )

  const { socket } = useContext(SocketContext)

  const [tickets, setTickets] = useState([])

  useEffect(() => {
    socket.on('tickets-asignados', ( asignados ) => {
      setTickets(asignados)
    } )
  
    return () => {
      socket.off('tickets-asignados')
    }
  }, [socket])

  useEffect(() => {
    
    getUltimos()
      .then(setTickets)
      .catch( error => console.log(error))

  }, [])
  
  

  return (
    <>
      <Title level={1}>Atendiendo al cliente: </Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={ tickets.slice(0,3) }
            renderItem={ item => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16}}
                  actions={[
                    <Tag color='volcano'> {item.ejecutivo}</Tag>,
                    <Tag color='magenta'> Escritorio: {item.escritorio}</Tag>,
                  ]}
                >

                  <Title>Nro. {item.numero}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
            <Divider> Historial</Divider>
            <List
              dataSource={tickets.slice(0,10)}
              renderItem={ item => (
                <List.Item.Meta
                  title={`Ticket Nro. ${item.numero}`}
                  description={
                    <>
                      <Text type='secondary'>En el Escritorio: </Text>
                      <Tag color='magenta'>{item.escritorio} </Tag>
                      <Text type='secondary'>Agente: </Text>
                      <Tag color='volcano'>{item.ejecutivo}</Tag>
                    </>
                  }
                >

                </List.Item.Meta>
              )}
            />


        </Col>
      </Row>
    </>
  )
}
