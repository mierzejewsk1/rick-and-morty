import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  cssVariables: true,

  palette: {
    primary: {
      main: '#004D61',
      contrastText: '#fff',
    },
    secondary: {
      light: '#2b3038',
      main: '#222831',
      contrastText: '#fff',
    },
    info: {
      main: '#fff',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          transition: 'all 0.2s ease-in',
          fontSize: '1.4rem',
          textTransform: 'none',
          color: theme.palette.primary.contrastText,
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: 'inset 0px 1px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          border: `1px solid ${theme.palette.info.dark}`,
          color: theme.palette.primary.contrastText,
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          top: '-15px',
          fontSize: '1.8rem',
          color: theme.palette.primary.contrastText,
          '&.Mui-focused': {
            color: theme.palette.primary.contrastText,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '1.2rem',
          '& .MuiOutlinedInput-input': {
            color: theme.palette.primary.contrastText,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },
        }),
        notchedOutline: {
          border: 'none',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderCollapse: 'collapse',
          width: '100%',
          border: `1px solid ${theme.palette.primary.main}`,
        }),
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderLeft: `1px solid ${theme.palette.primary.main}`,
          borderRight: `1px solid ${theme.palette.primary.main}`,
          borderColor: theme.palette.primary.main,
          fontSize: '1.5rem',
          color: theme.palette.primary.contrastText,
        }),
        head: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.primary.main}`,
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.light,
        }),
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }),
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          fontSize: '1.5rem',
          color: theme.palette.primary.contrastText,
        }),

        actions: {
          '& .MuiIconButton-root': {
            height: '50px',
            width: '50px',
          },
        },
      },
      defaultProps: {
        slotProps: {
          select: {
            style: {
              fontSize: '1.5rem',
            },
          },
          toolbar: {
            style: {
              fontSize: '1.5rem',
            },
          },
          displayedRows: {
            style: {
              fontSize: '1.5rem',
            },
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '5px',
          border: `1px solid ${theme.palette.primary.main}`,
        }),
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          hideBackdrop: true,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            fontSize: '2.8rem',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: '8px 12px',
          fontSize: '1.3rem',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.contrastText,
        }),
        h1: () => ({
          fontWeight: '500',
          fontSize: '3rem',
        }),
        h2: () => ({
          fontSize: '1.5rem',
        }),
      },
    },
  },
});

const lightTheme = createTheme({
  cssVariables: true,

  palette: {
    primary: {
      main: '#00b3c4',
      contrastText: '#000',
    },
    secondary: {
      main: '#dddddd',
      dark: '#d8d8d8',
      contrastText: '#000',
    },
    info: {
      main: '#f0f0f0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          transition: 'all 0.2s ease-in',
          fontSize: '1.4rem',
          textTransform: 'none',
          color: theme.palette.primary.contrastText,
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: 'inset 0px 1px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          border: `1px solid ${theme.palette.info.dark}`,
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          top: '-15px',
          fontSize: '1.8rem',
          color: theme.palette.primary.contrastText,
          '&.Mui-focused': {
            color: theme.palette.primary.contrastText,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },
        },
        notchedOutline: {
          border: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
        },
        head: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
        },
        actions: {
          '& .MuiIconButton-root': {
            height: '50px',
            width: '50px',
          },
        },
      },
      defaultProps: {
        slotProps: {
          select: {
            style: {
              fontSize: '1.5rem',
            },
          },
          toolbar: {
            style: {
              fontSize: '1.5rem',
            },
          },
          displayedRows: {
            style: {
              fontSize: '1.5rem',
            },
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.info.main,
          borderRadius: '5px',
          border: `1px solid ${theme.palette.primary.contrastText}`,
        }),
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            fontSize: '2.8rem',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: '8px 12px',
          fontSize: '1.3rem',
        },
      },
    },
  },
  typography: {
    h1: {
      fontWeight: '500',
      fontSize: '3rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
  },
});

export { lightTheme, darkTheme };
