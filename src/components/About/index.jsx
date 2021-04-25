import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../Home'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
const { Header, Content } = Layout

export const About = () => (
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
            <Content style={styles.content}><h1>О нас</h1></Content>
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

