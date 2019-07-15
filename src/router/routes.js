const routes = [
  {
    // 1. Landing Layout
    // STATUS: unfinished / unstable
    path: '/',
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      // 1.1.
      // STATUS: stable / unfinished
      {
        path: '',
        name: 'home',
        component: () => import('pages/Index.vue') // TBU
      }
      // 1.x.
      // TODO:FIXME:
      // Planned children: Login, Register, ...
    ]
  },
  {
    // 2. Catalog App Layout - PART 1
    // 2.1. STATUS: stable / unfinished
    // > path: /#/catalog
    path: '/catalog',
    component: () => import('layouts/CatalogLayout.vue'),
    children: [
      // 2.1.1. STATUS: stable / unfinished
      // > path: /#/catalog/
      {
        path: '',
        components: {
          nestedLayout: () => import('layouts/CatalogNestedLayout.vue')
        },
        children: [
          // 2.1.1.1. STATUS: stable / unfinished
          // > path: /#/catalog/
          {
            path: '',
            name: 'catalog',
            components: {
              sidenav: () => import('components/TheTree.vue'),
              page: () => import('pages/CatalogPage.vue')
            },
            children: [
              // 2.1.1.1.1. STATUS: unstable / unfinished
              // > path: /#/catalog/folder/:fid
              {
                path: 'folder/:fid', // fid - stands for folder's ID
                name: 'folder',
                components: {
                  sidenav: () => import('components/TheTree.vue'),
                  page: () => import('pages/CatalogPage.vue')
                },
                children: [
                  // 2.1.1.1.1.1. STATUS: stable / unfinished
                  // > path: /#/catalog/folder/:fid/document/:did
                  {
                    path: 'document/:did', // did - stands for document's ID
                    name: 'nestedDocument',
                    components: {
                      sidenav: () => import('components/TheTree.vue'),
                      page: () => import('pages/CatalogPage.vue')
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    // 3. Catalog App Layout - PART 2
    // STATUS: stable / unfinished
    path: '/settings',
    component: () => import('layouts/SettingsLayout.vue'),
    children: [
      // 3.1. Catalog Support sub-routes:
      // STATUS: stable / unfinished
      {
        path: '',
        name: 'settings',
        components: {
          default: () => import('pages/SettingsPage.vue'),
          sidenav: () => import('components/TheMenu.vue')
        }
      },
      // 3.1.1.
      // STATUS: stable / unfinished
      {
        path: 'profile',
        name: 'profile',
        components: {
          default: () => import('pages/ProfilePage.vue'),
          sidenav: () => import('components/TheMenu.vue')
        }
      },
      // 3.1.2.
      // STATUS: stable / unfinished
      {
        path: 'account_settings',
        name: 'account_settings',
        components: {
          default: () => import('pages/AccountSettingsPage.vue'),
          sidenav: () => import('components/TheMenu.vue')
        }
      },
      // 3.1.3.
      // STATUS: stable / unfinished
      {
        path: 'general_settings',
        name: 'general_settings',
        components: {
          default: () => import('pages/GeneralSettingsPage.vue'),
          sidenav: () => import('components/TheMenu.vue')
        }
      },
      // 3.1.4.
      // STATUS: stable / unfinished
      {
        path: 'orders',
        name: 'orders',
        components: {
          default: () => import('pages/OrdersPage.vue'),
          sidenav: () => import('components/TheMenu.vue')
        }
      },
      // 3.1.5.
      // STATUS: stable / unfinished
      {
        path: 'notifications',
        name: 'notifications',
        components: {
          default: () => import('pages/NotificationsPage.vue'),
          sidenav: () => import('components/TheMenu.vue')
        }
      },
      {
        // 3.1.6.
        // STATUS: stable / unfinished
        path: 'help_center',
        name: 'help_center',
        components: {
          default: () => import('pages/HelpCenterPage.vue'),
          sidenav: () => import('components/TheMenu.vue')
        }
      },
      {
        // 3.1.7.
        // STATUS: stable / unfinished
        path: 'logout',
        name: 'logout',
        components: {
          default: () => import('pages/LogoutPage.vue'),
          sidenav: () => import('components/TheMenu.vue')
        }
      }
    ]
  }
  // {
  //
  //
  //
  // TEST. PART IV
  // path: '/document',
  // components: {
  //   default: () => import('layouts/DocumentLayout.vue')
  // },
  // children: [
  //   {
  //     path: '',
  //     components: {
  //       nestedLayout: () => import('layouts/BlankLayout.vue')
  //     },
  //     children: [
  //       {
  //         path: '',
  //         name: 'catalog',
  //         components: {
  //           sidenav: () => import('components/TheTree.vue'),
  //           page: () => import('pages/CatalogPage.vue')
  //           // controlPanelPlace: () => import('components/TheControlPanel.vue')
  //         }
  //       }
  //     ]
  // }
  // {
  //   path: '/:id',
  //   name: 'document',
  //   components: {
  //     default: () => import('pages/CatalogPage.vue'),
  //     sidenav: () => import('components/TheTree.vue')
  //   }
  // }
  // ]
  // }
]

// X.
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
