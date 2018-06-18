export const navigation = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    icon: 'fa fa-tachometer',
    badge: {
      variant: 'info',
      text: ''
    },
    role:['ROLE_DASHBOARD']
  },
    {
      name: 'Gestion des SFD',
      url: '/GestionSFD',
      icon: 'fa fa-building',
      role:['ROLE_GESTIONSFD']
    },
    {
      name: 'Gestion des agents',
      url: '/GestionDesAgents',
      icon: 'fa fa-users',
      role:['ROLE_GESTIONDESAGENTS']
    },
    // {
    //   name: 'Gestion des administrateurs SFD',
    //   url: '/GestionDesAdmin',
    //   icon: 'fa fa-users',
    //   role:['ROLE_GESTIONADMINISTRATEURSFD']
    // },
    
    
{
      name: 'Gestion des Adherents',
      url: '/GestionAdherents',
      icon: 'fa fa-users',
      role:['ROLE_GESTIONDESADHERENT']
    },

    {
      name: 'Gestion point de vente',
      url: '/GestionPDV',
      icon: 'fa fa-institution',
      role:['ROLE_GESTIONDESPDV']
//       ,children :[

// // {
// //   name: 'Gestion responsables',
// //   url: '/GestionResPdv',
// //   icon: 'fa fa-users',
// //   role:['ROLE_GESTIONDESRESPONSABLEPDV']
// // },
// {
//   name: 'Gestion Point de vente',
//   url: '/GestionPDV',
//   icon: 'fa fa-institution',
//   role:['ROLE_GESTIONDESPDV']
// }
//       ]
    },
   {
  name: 'Gestion des accès',
  url: '/GestionAccès',
  icon: 'fa fa-key',
  role:['ROLE_GESTIONDESACCES']
  , children: [
    { name: 'Gestion des utilisateurs', url: '/GestionAccès', icon: 'fa fa-user',role:['ROLE_GESTIONDESACCES']},
    { name: 'Gestion des rôles', url: '/GestionRoles', icon: 'fa fa-address-card',role:['ROLE_GESTIONDESACCES']  },
    { name: 'Gestion des fonctions', url: '/GestionFontions', icon: 'fa fa-eye',role:['ROLE_GESTIONDESACCES']  },
  ]},
    {
      name: 'Statistiques',
      url: '/Statistiques',
      icon: 'fa fa-bar-chart',
      role:['ROLE_STATISTIQUE']
    },

    {
      name: 'Paramètres globaux',
      url: '/GestionParamètresGlobaux',
      icon: 'fa fa-gears',
      role:['ROLE_PARAMETRE']

    },
    {
      name: 'Paramètres compte',
      url: '/GestionParamètresComptes',
      icon: 'fa fa-gear',
      role:['ROLE_GESTIONCOMPTE']
    }
    ,
    {
      name: 'Déconnexion',
      url: '',
      icon: 'fa fa-sign-out',
      role:['ROLE_ADMIN','ROLE_ADMINSFD','ROLE_RESPONSABLEPDV','ROLE_AGENT'],
      button : true,
    }

];
