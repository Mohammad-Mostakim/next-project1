// assets
import { FaQuestionCircle } from "react-icons/fa";

// icons
const icons = {
    FaQuestionCircle
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'Support',
    type: 'collapse',
    children: [
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: 'sample-page',
            icon: icons.FaQuestionCircle
        },
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/mantis-react/',
            icon: icons.FaQuestionCircle,
            external: true,
            target: false
        }
    ]
};

export default support;
