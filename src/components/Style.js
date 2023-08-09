import {makeStyles } from "@material-ui/core";

export const estyles = makeStyles((theme)=>({
    wrapper:{
        // & indicate parent Element
        "& .clk-btn":{
            // backgroundColor:"black",
            color:"#black",
            "& button":{
                padding: theme.spacing(2), // 4*n
            }
        },
        "& .txt-fld":{
            backgroundColor:"#33FFFC",
            color:"black",
            marginRight:"50px",
        },
    },
}));