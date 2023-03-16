import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ConfigProvider} from "antd";

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

const App = () => {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#1DA57A',
            }
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/*" element={<Admin/>}/>
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    )
}
export default App;
