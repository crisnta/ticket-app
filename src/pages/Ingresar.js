import React, { useEffect, useState } from 'react';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';


const { Title, Text} = Typography

export const Ingresar = () => {

    useHideMenu( false )

    const navigate = useNavigate()

    const [ usuario ] = useState(getUsuarioStorage())

    const onFinish = ( {ejecutivo, escritorio} ) => {

        localStorage.setItem('ejecutivo', ejecutivo)
        localStorage.setItem('escritorio', escritorio)

        navigate('/escritorio')

      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
      if ( usuario.ejecutivo && usuario.escritorio ) return navigate('/escritorio')
 
    }, [usuario.ejecutivo, usuario.escritorio, navigate])
    

  return (
        <>
        <Title level={ 2 } >Ingresar </Title>
        <Text>Ingrese su nombre y numero de escritorio</Text>
            <Divider />

        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Nombre del ejecutivo"
                name="ejecutivo"
                rules={[
                    {
                    required: true,
                    message: 'Porfavor ingresa tu nombre',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Escritorio"
                name="escritorio"
                rules={[
                    {
                    required: true,
                    message: 'Ingrese su numero de Escritorio',
                    },
                ]}
            >
                <InputNumber min={ 1 } max={ 99 }/>
            </Form.Item>

        <Form.Item
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        >
        <Button type="primary" htmlType="submit" shape='round'>
        <SaveOutlined />
            Ingresar
        </Button>
        </Form.Item>
        </Form>
        </>
        
  )
}
