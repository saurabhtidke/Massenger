import React, { useState } from "react";
import { TextField, Button, Grid, SnackbarContent } from "@mui/material";
export const Tushar = ({ txtSaurabh, setTxtTushar, txtTushar,setIsTusharTyping }) => {
    const [txt, setTxt] = useState("")
    console.log(txt);
    return (
        <div className="sau">
            <h1>Tushar</h1>
            <Grid container spacing={3}>

                <Grid item xs={8}>
                    <TextField value={txt}
                        className="chattext"
                        variant="outlined"
                        onFocus={() => setIsTusharTyping(true)}
                        onBlur={() => setIsTusharTyping(false)}
                        label="Enter Massege"
                        onChange={(e) => setTxt(e.target.value)} />
                </Grid>
                <Grid item xs={4}>
                    <Button className="sau3" variant="contained"
                        onClick={() => {
                            setTxtTushar([txt, ...txtTushar])
                            setTxt("")
                        }}>
                        Send
                    </Button>
                </Grid>
                {txtSaurabh.map((item) =>
                    <Grid item xs={12}>
                        <SnackbarContent message={item} />
                    </Grid>
                )}
                {txtTushar.map((item) =>
                    <Grid item xs={12}>
                        <SnackbarContent message={item} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}