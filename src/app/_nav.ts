export const navigation = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    icon: 'fa fa-tachometer',
    badge: {
      variant: 'info',
      text: ''
    }
  },
    {
      name: 'Gestion des SFD',
      url: '/GestionSFD',
      icon: 'fa fa-institution'
    },

   {
    name: 'Gestion des accès',
    url: '/GestionAccès',
    icon: 'fa fa-key', children: [
     
      { name: 'Gestion des utilisateurs',url: '/GestionAccès',icon: 'fa fa-user' },
      { name: 'Gestion des rôles', url: '/GestionRoles', icon: 'fa fa-address-card'  },
      { name: 'Gestion des fonctions', url: '/GestionFontions', icon: 'fa fa-eye'  },
     
    ]},
 
    {
      name: 'Statistiques',
      url: '/Statistiques',
      icon: 'fa fa-bar-chart'
 
    },
  
    {
      name: 'Paramètres globaux',
      url: '/GestionParamètresGlobaux',
      icon: 'fa fa-gears'
   
    },
    {
      name: 'Paramètres compte',
      url: '/GestionParamètresComptes',
      icon: 'fa fa-gear'
 
    }
    ,
    {
      name: 'Déconnexion',
      url: '',
      icon: 'fa fa-sign-out'
     
    }
   
];
