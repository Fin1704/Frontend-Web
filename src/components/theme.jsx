import { colors, MenuList } from '@mui/material';
import { createTheme } from '@mui/material/styles';
// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: "#ff0000"
    },
    background: {
      default: "#fff"
    }
  },

  // This is just boilerplate code
  overrides: {
    MuiSelect: {
      outlined: {
        lineHeight: "20px",
        padding: [[10, 20]],
        marginRight: 8
      }
    }
  },

  // Here I define my overrides
  props: {
    
    MuiSelect: {
      // These one work fine
      autoWidth: true,
      variant: "outlined",

      MenuProps: {
        // I have to put inline style to get my margin applied, ideally I would like to put this in the overrides section
        style: {
          marginTop: 40
        },

        // For these lines to work, MenuProps can't be defined on my Select component
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      }
    }
  }
});

export default theme;
