export default [
    {
        path: '/',
        component: () => import('layouts/default'),
        children: [
            {path: '', redirect: '/auth/login'},
        ]
    },

    {
        path: '/auth',
        component: () => import('layouts/auth'),
        children: [
            {path: 'login', component: () => import('pages/login')}
        ]
    },

    {
        path: '/clients',
        component: () => import('layouts/default'),
        children: [
            {path: '', component: () => import('pages/clients/index')}
        ]
    },

    {
        path: '/clients',
        component: () => import('layouts/modal'),
        children: [
            {path: 'new', component: () => import('pages/clients/new')}
        ]
    },

    {
        path: '/todo',
        component: () => import('layouts/default'),
        children: [
            {path: '', component: () => import('pages/index')},
        ]
    },

    { // Always leave this as last one
        path: '*',
        component: () => import('pages/404')
    }
]
