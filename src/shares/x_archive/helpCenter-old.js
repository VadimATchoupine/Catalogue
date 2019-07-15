module.exports = [
  {
    id: '1',
    label: 'Help Folder 1',
    icon: 'folder',
    iconColor: 'primary',
    disabled: false,
    isParent: true,
    children: [
      {
        id: '01',
        label: 'Dir 1',
        icon: 'folder',
        disabled: false,
        isParent: true,
        children: [
          { id: '0001', label: 'Doc 1', icon: 'insert_drive_file', isParent: false },
          { id: '0002', label: 'Doc 2', icon: 'insert_drive_file', isParent: false }
        ]
      },
      {
        id: '02',
        label: 'Dir 2',
        icon: 'folder',
        disabled: false,
        isParent: true,
        children: [
          { id: '0003', label: 'Doc 3', icon: 'insert_drive_file', isParent: false },
          { id: '0004', label: 'Doc 4', icon: 'insert_drive_file', isParent: false }
        ]
      },
      {
        id: '103',
        label: 'Dir 3',
        icon: 'folder',
        disabled: true,
        isParent: true,
        children: [
          { id: '0005', label: 'Doc 5', icon: 'insert_drive_file', isParent: false },
          { id: '0006', label: 'Doc 6', icon: 'insert_drive_file', isParent: false },
          { id: '0007', label: 'Doc 7', icon: 'insert_drive_file', isParent: false }
        ]
      }
    ]
  },
  {
    id: '2',
    label: 'Help Folder 2',
    icon: 'folder',
    iconColor: 'primary',
    disabled: false,
    children: [
      {
        id: '04',
        label: 'Dir 4',
        icon: 'folder',
        disabled: false,
        children: [
          { id: '0008', label: 'Doc 1', icon: 'insert_drive_file' },
          { id: '0009', label: 'Doc 2', icon: 'insert_drive_file' }
        ]
      },
      {
        id: '05',
        label: 'Dir 5',
        icon: 'folder',
        disabled: false,
        children: [
          { id: '00010', label: 'Doc 1', icon: 'insert_drive_file' },
          { id: '00011', label: 'Doc 2', icon: 'insert_drive_file' }
        ]
      },
      {
        id: '06',
        label: 'Dir 6',
        icon: 'folder',
        disabled: false,
        children: [
          { id: '00012', label: 'Doc 1', icon: 'insert_drive_file' },
          { id: '00013', label: 'Doc 2', icon: 'insert_drive_file' },
          { id: '00014', label: 'Doc 3', icon: 'insert_drive_file' }
        ]
      }
    ]
  },
  {
    id: '112312',
    label: 'Help Folder 3',
    icon: 'folder',
    iconColor: 'primary',
    disabled: false,
    isParent: false
  }
]
