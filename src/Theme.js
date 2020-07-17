const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
    pallette:{
        primary: {
            main: "black"
        }
    },
    background:{
        default:"black"
    }
})

export default theme;