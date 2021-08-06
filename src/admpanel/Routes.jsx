import Dashboard from "./views/Dashboard";
import User from "./views/User";
import NovelArchive from "./views/NovelArchive";
import Comment from "./views/Comment";
import Setting from "./views/Setting";

// Pages File
import AddNovel from "./views/pages/AddNovel";
import AddChapter from "./views/pages/AddChapter";
import DetailNovel from "./views/pages/DetailNovel";

const admRoutes = [
    {
        layout: "/adm-panel",
        path: "dashboard",
        name: "Dashboard",
        icon: "bx bxs-dashboard",
        component: Dashboard,
        status: 0,
        role: ['admin']
    },
    {
        layout: "/adm-panel",
        path: "users",
        name: "User",
        icon: "bx bxs-user-account",
        component: User,
        status: 0,
        role: ['admin']
    },
    {
        layout: "/adm-panel",
        path: "novel-archive",
        name: "Novel Archive",
        icon: "bx bxs-book-content",
        component: NovelArchive,
        status: 0,
        role: ['admin']
    },
    {
        layout: "/adm-panel",
        path: "comment",
        name: "Comment",
        icon: "bx bxs-bx bx-chat",
        component: Comment,
        status: 0,
        role: ['admin']
    },
    {
        layout: "/adm-panel",
        path: "setting",
        name: "Setting",
        icon: "bx bx-cog",
        component: Setting,
        status: 0,
        role: ['admin']
    },
    {
        layout: "/adm-panel",
        path: "novel-archive/add",
        name: "Add New Novel",
        component: AddNovel,
        status: 1,
        role: ['admin']
    },
    {
        layout: "/adm-panel",
        path: "novel-archive/chapter/add",
        name: "Add New Chapter",
        component: AddChapter,
        status: 1,
        role: ['admin']
    },
    {
        layout: "/adm-panel",
        path: "novel-archive/:novel/detail",
        name: "Detail Novel",
        component: DetailNovel,
        status: 1,
        role: ['admin']
    }
]

export default admRoutes;