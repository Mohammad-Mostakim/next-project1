// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Authentication',
    type: 'collapse',
    children: [
        {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: 'login',
            icon: icons.LoginOutlined,
            target: false
        },
        {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: 'register',
            icon: icons.ProfileOutlined,
            target: false
        }
    ]
};

export default pages;
