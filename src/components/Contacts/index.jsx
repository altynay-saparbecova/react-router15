import React from 'react'
import { data } from '../Home'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Layout } from 'antd'
const { Header, Content } = Layout

export const Contacts = () => (
    <>
        <Layout>
            <Header>
                {data.map((el, id) => {
                    return (
                        <Link key={id} to={el.route}>
                            <span style={{ marginLeft: 20 }}>{el.name}</span>
                        </Link>
                    )
                })}
            </Header>
            <Content style={styles.content}><h1>Контакты</h1></Content>
        </Layout>
    </>
)
const styles = {
    content: {
        height: '500px',
        textAlign: 'center',
        paddingTop: '20px'

    }
}
