import React, { useContext } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import { Ingresar } from './Ingresar';
import { CrearTicket } from './CrearTicket';
import { Cola } from './Cola';
import { Escritorio } from './Escritorio';
import { UiContext } from '../context/UiContext';

const { Sider, Content } = Layout;

export const RouterPage = () => {

    const { ocultarMenu } = useContext(UiContext)

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();


  return (
    
        <Layout>
            <Sider hidden={ocultarMenu} style={{ height: '100vh'}} trigger={null} breakpoint='md' collapsedWidth='0'>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: <Link to="/ingresar">Ingresas</Link>,
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: <Link to="/cola">Cola de Tickets</Link>,
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: <Link to="/crear">Crear Ticket</Link>,
                    },
                ]}
                />
            </Sider>
            <Layout>
                <Content
                style={{
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
                >
                    <Routes>
                        <Route path='/ingresar' element={<Ingresar/>}/>
                        <Route path='/cola' element={<Cola/>}/>
                        <Route path='/crear' element={<CrearTicket/>}/>

                        <Route path='/escritorio' element={<Escritorio />}/>
                        {/* Using path="*"" means "match anything", so this route
                            acts like a catch-all for URLs that we don't have explicit
                            routes for. */}
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </Content>
            </Layout>
        </Layout>

  )
}
