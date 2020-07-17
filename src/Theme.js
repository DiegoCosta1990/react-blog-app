const { createMuiTheme } = require("@material-ui/core");

const theme = createMuiTheme({
    pallette:{
        primary: {
            main: "white"
        }
    },
    background:{
        default:"grey"
    }
})

export default theme;