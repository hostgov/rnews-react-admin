import './index.css'
import {Link} from "react-router-dom";

import {
    AppstoreOutlined,
    UserOutlined,
    BarsOutlined,
    EditOutlined,
    HomeOutlined,
    ReadOutlined,
    TeamOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PieChartOutlined

} from '@ant-design/icons';
import {Menu} from 'antd';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<Link to='/home'>Home</Link>, '1', <HomeOutlined />),
    getItem('News', '2', <ReadOutlined />, [
        getItem(<Link to='/category'>News Category manage</Link>, '21',<BarsOutlined />),
        getItem(<Link to='/news'>News manage</Link>, '22',<EditOutlined />)
    ]),
    getItem(<Link to='/user'>User manage</Link>, '3', <UserOutlined />),
    getItem(<Link to='/role'>Role manage</Link>, '4', <TeamOutlined />),
    getItem('Charts', '6', <AppstoreOutlined />, [
        getItem(<Link to='/charts/bar'>Bar Chart</Link>, '61', <BarChartOutlined />),
        getItem(<Link to='/charts/line'>Line Chart</Link>, '62',<LineChartOutlined />),
        getItem(<Link to='/charts/pie'>Pie Chart</Link>, '63',<PieChartOutlined />),
    ]),
];

const LeftNav = () => {
    return (
        <div className="left-nav">
            <Link to='/home' className="left-nav-header">
                <h1>RNews Admin</h1>
            </Link>
            <div
                style={{
                    width: 200,
                }}
            >
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    items={items}
                />
            </div>
        </div>
    )
}
export default LeftNav
