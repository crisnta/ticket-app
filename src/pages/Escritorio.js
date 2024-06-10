import { CloseCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { useHideMenu } from '../hooks/useHideMenu'
import { useNavigate } from 'react-router-dom'
import { getUsuarioStorage } from '../helpers/getUsuarioStorage'
import { SocketContext } from '../context/SocketContext'

const { Title, Text } = Typography

export const Escritorio = () => {

  const navigate = useNavigate()

  const [ticketAsignado, setTicketAsignado ] = useState(null)

  const [ usuario ] = useState(getUsuarioStorage())

  const { socket } = useContext(SocketContext)

  useHideMenu( false )

  const salir = ( ) => {

    localStorage.clear()
    navigate('/ingresar')

  }

  const siguienteTicket = () => {

    socket.emit('siguiente-ticket-trabajar', usuario, (ticket) => {
      setTicketAsignado(ticket)
    })

  }

  useEffect(() => {
    if ( !usuario.ejecutivo || !usuario.escritorio ) return navigate('/ingresar')

  }, [usuario.ejecutivo, usuario.escritorio, navigate])


  return (
    <>
      <Row>
        <Col span={ 20 }>
          <Title level={2}><span style={{ color: 'darkblue'}}>Ejecutivo:</span> {usuario.ejecutivo}</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type='success'>{usuario.escritorio}</Text>
        </Col>

        <Col span={ 4 } align='right'>
          <Button 
            shape='round'
            type='primary'
            danger
            onClick={ salir }
          > 
            <CloseCircleOutlined/>
              Salir
          </Button>
        
        </Col>
      </Row>
      <Divider />

      { ticketAsignado && (
        <Row>
          <Col>
            <Text>Esta atendiendo el ticket numero: </Text>
            <Text style={{ fontSize: 30}} type='danger'>{ticketAsignado.numero}</Text>
          </Col>
        </Row>
        )}
        

      <Row>
        <Col offset={ 18 } span={ 6 } align='center'>
          <Button
            onClick={ siguienteTicket }
            shape='round'
            type='primary'
          >
            <RightCircleOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>

    </>
  )
}
