module.exports = [
  {
    id: '1',
    label: 'Приступая к работе',
    isParent: true,
    children: [
      {
        id: '11',
        label: 'Dir 1',
        isParent: true,
        children: [
          { id: '111', label: 'Doc 1', icon: 'insert_drive_file', isParent: false },
          { id: '112', label: 'Doc 2', icon: 'insert_drive_file', isParent: false }
        ]
      },
      {
        id: '12',
        label: 'Dir 2',
        isParent: true,
        children: [
          { id: '121', label: 'Doc 3', icon: 'insert_drive_file', isParent: false }
        ]
      }
    ]
  },
  {
    id: '2',
    label: 'Личный кабинет',
    isParent: true,
    children: [
      {
        id: '21',
        label: 'Dir 4',
        isParent: false
      },
      {
        id: '22',
        label: 'Dir 5',
        isParent: true,
        children: [
          { id: '221', label: 'Doc 1', icon: 'insert_drive_file', isParent: false },
          { id: '222', label: 'Doc 2', icon: 'insert_drive_file', isParent: false }
        ]
      },
      {
        id: '23',
        label: 'Dir 6',
        isParent: true,
        children: [
          { id: '231', label: 'Doc 1', icon: 'insert_drive_file', isParent: false },
          { id: '232', label: 'Doc 3', icon: 'insert_drive_file', isParent: false }
        ]
      }
    ]
  },
  {
    id: '3',
    label: 'Работа с документами'
  },
  {
    id: '4',
    label: 'Согласование'
  },
  {
    id: '5',
    label: 'Работа с реестром документов',
    isParent: true,
    children: [
      { id: '51', label: 'Doc 1', icon: 'insert_drive_file', isParent: false },
      { id: '52', label: 'Doc 3', icon: 'insert_drive_file', isParent: false }
    ]
  },
  {
    id: '6',
    label: 'Контекстаная справка',
    isParent: true,
    children: [
      { id: '61', label: 'Doc 1', icon: 'insert_drive_file', isParent: false },
      { id: '62', label: 'Doc 3', icon: 'insert_drive_file', isParent: false }
    ]
  }
]
