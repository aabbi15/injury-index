'use client'
import { Layout, Breadcrumb, Card } from 'antd';
import { useUser } from '@auth0/nextjs-auth0/client';


const { Content } = Layout;

export default function Profile() {

    const { user, error, isLoading } = useUser();

    // console.log(user, error);

    return (
        <div>
            <Content
                style={{
                    margin: '0 16px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Profile</Breadcrumb.Item>
                    <Breadcrumb.Item>{user ? user.nickname : "hi"}</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 550,
                        background: "#ffffff",
                        borderRadius: 8,
                    }}


                >

                    <div className='div h-full mt-20 w-full flex justify-center'>

                        <Card
                            style={{
                                width: 300,
                            }}
                        >

                            {
                                user ? (
                                    <>
                                    <div className="flex items-center justify-center w-full border-b-2 border-gray-300 pb-4 mb-4 ">
                                        <img   src={user.picture} alt="avatar" style={{ width: 50 }} />
                                        </div>
                                        {/* <br/> */}
                                        <p> <span className='font-bold'> Username: </span>  {user.nickname}</p>
                                        <p><span className='font-bold'> Email: </span> {user.email}</p>
                                        <p> <span className='font-bold'> Joined at: </span> {user.updated_at}</p>
                                        
                                    </>
                                ) : "Loading..."
                            }
                           
                        </Card>

                    </div>


                </div>
            </Content>

        </div>
    )
}