import { CloseCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHideMenu } from '../hooks/useHideMenu'
import { useNavigate } from 'react-router-dom'
import { getUsuarioStorage } from '../helpers/getUsuarioStorage'

const { Title, Text } = Typography

export const Escritorio = () => {

  const navigate = useNavigate()

  const [ usuario ] = useState(getUsuarioStorage())

  useHideMenu( false )

  const salir = ( ) => {

    localStorage.clear()
    navigate('/ingresar')

  }

  const siguienteTicket = () => {

  }

  useEffect(() => {
    if ( !usuario.agente || !usuario.escritorio ) return navigate('/ingresar')

  }, [usuario.agente, usuario.escritorio, navigate])

  return (
    <>
      <Row>
        <Col span={ 20 }>
          <Title level={2}>{usuario.agente}</Title>
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

      <Row>
        <Col>
          <Text>Esta atendiendo el ticket numero: </Text>
          <Text style={{ fontSize: 30}} type='danger'>55</Text>
        </Col>
      </Row>

      <Row>
        <Col offset={ 18 } span={ 6 } align='right'>
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
