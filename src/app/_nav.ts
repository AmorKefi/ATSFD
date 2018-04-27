export const navigation = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    icon: 'fa fa-tachometer',
    badge: {
      variant: 'info',
      text: ''
    },
    role:['ROLE_ADMIN','ROLE_ADMINSFD','ROLE_RESPONSABLEPDV','ROLE_AGENT']
  },
    {
      name: 'Gestion des SFD',
      url: '/GestionSFD',
      icon: 'fa fa-building',
      role:['ROLE_ADMIN']
    },
    {

      name: 'Gestion des agents',
      url: '/GestionDesAgents',
      icon: 'fa fa-users',

      role:['ROLE_ADMIN','ROLE_ADMINSFD']
    },
    {
      name: 'Gestion des administrateurs SFD',
      url: '/GestionDesAdmin',
      icon: 'fa fa-users',

      role:['ROLE_ADMIN','ROLE_ADMINSFD']
    },
    
    
{
      name: 'Gestion des Adherents',
      url: '/GestionAdherents',
      icon: 'fa fa-users',
      role:['ROLE_ADMIN']
    },

    {
      name: 'Points de ventes',
      url: '/GestionPDV',
      icon: 'fa fa-institution',
      role:['ROLE_ADMINSFD']
      ,children :[

{
  name: 'Gestion responsables',
  url: '/GestionResPdv',
  icon: 'fa fa-users',
  role:['ROLE_ADMINSFD']
},
{name: 'Gestion Point de vente',
url: '/GestionPDV',
icon: 'fa fa-institution',
role:['ROLE_ADMINSFD']
}
      ]
    },
   {
    name: 'Gestion des accès',
    url: '/GestionAccès',
    icon: 'fa fa-key',
    role:['ROLE_ADMIN']
    , children: [

      { name: 'Gestion des utilisateurs', url: '/GestionAccès', icon: 'fa fa-user',role:['ROLE_ADMIN']},
      { name: 'Gestion des rôles', url: '/GestionRoles', icon: 'fa fa-address-card',role:['ROLE_ADMIN']  },
      { name: 'Gestion des fonctions', url: '/GestionFontions', icon: 'fa fa-eye',role:['ROLE_ADMIN']  },

    ]},

    {
      name: 'Statistiques',
      url: '/Statistiques',
      icon: 'fa fa-bar-chart',
      role:['ROLE_ADMIN','ROLE_ADMINSFD']
    },

    {
      name: 'Paramètres globaux',
      url: '/GestionParamètresGlobaux',
      icon: 'fa fa-gears',
      role:['ROLE_ADMIN','ROLE_ADMINSFD']

    },
    {
      name: 'Paramètres compte',
      url: '/GestionParamètresComptes',
      icon: 'fa fa-gear',
      role:['ROLE_ADMIN','ROLE_ADMINSFD','ROLE_RESPONSABLEPDV','ROLE_AGENT']
    }
    ,
    {
      name: 'Déconnexion',
      url: '',
      icon: 'fa fa-sign-out',
      role:['ROLE_ADMIN','ROLE_ADMINSFD'],
      button : true,
    }

];
