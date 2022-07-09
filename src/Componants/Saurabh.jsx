import React, { useState } from "react";
import { TextField, Button, Grid, SnackbarContent } from "@mui/material";
export const Saurabh = ({ setTxtSaurabh, txtTushar, txtSaurabh, setIsSaurabhTyping }) => {
    const [txt, setTxt] = useState("")
    return (
        <div className="sau">
            <h1>Saurabh</h1>
            <Grid container spacing={3}>

                <Grid item xs={8}>
                    <TextField value={txt}
                        className="chattext"
                        label="Enter Massege"
                        variant="outlined"
                        onFocus={() => setIsSaurabhTyping(true)}
                        onBlur={() => setIsSaurabhTyping(false)}
                        onChange={(e) => setTxt(e.target.value)}></TextField>
                </Grid>
                <Grid item xs={4}>
                    <Button className="sau3" variant="contained"
                        onClick={() => {
                            setTxtSaurabh([txt, ...txtSaurabh])
                            setTxt("")
                        }}>
                        Send
                    </Button>
                </Grid>
                {txtTushar.map(item =>
                    <Grid item xs={12}>
                        <SnackbarContent message={item}

                        ></SnackbarContent>
                    </Grid>
                )}
                {txtSaurabh.map(item =>
                    <Grid item xs={12}>
                        <SnackbarContent message={item}

                        ></SnackbarContent>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}