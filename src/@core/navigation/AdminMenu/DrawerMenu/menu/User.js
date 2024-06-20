// assets
import { TeamOutlined, ProfileOutlined,UserOutlined } from '@ant-design/icons';

// icons
const icons = {
    TeamOutlined,
    ProfileOutlined,
    UserOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const User = {
    id: 'users',
    title: 'Users',
    type: 'collapse',
    icon:icons.UserOutlined,
    url:"user-info",
    target:false,
    breadcrumbs: true,
    children: [
        {
            id: 'user-list',
            title: 'User List',
            type: 'collapseItem',
            url: 'user-info/user-list',
            icon: icons.TeamOutlined,
            target: false,
            breadcrumbs: true,
        },
        {
            id: 'userComplains',
            title: 'Complains',
            type: 'collapseItem',
            url: 'user-info/complain',
            icon: icons.ProfileOutlined,
            target: false,
            breadcrumbs: true,
        }
    ]
};

export default User;
