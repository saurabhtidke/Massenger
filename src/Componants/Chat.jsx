import React, { useState } from "react";
import { Tushar } from "./Tushar";
import { Saurabh } from "./Saurabh";
import { Grid, Badge } from "@mui/material"
export const Chat = () => {
    const [txtSaurabh, setTxtSaurabh] = useState([])
    const [isSaurabhTyping, setIsSaurabhTyping] = useState(false)
    const [txtTushar, setTxtTushar] = useState([])
    const [isTusharTyping, setIsTusharTyping] = useState(false)
    useState(() => {
    }, [txtSaurabh])
    useState(() => {
    }, [txtTushar])
    return (
        <div className="sub">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Badge
                        badgeContent={isTusharTyping ? "Tushar is Typing" : 0} color="primary">
                        <Saurabh
                            setTxtSaurabh={setTxtSaurabh}
                            txtTushar={txtTushar}
                            txtSaurabh={txtSaurabh}
                            setIsSaurabhTyping={setIsSaurabhTyping}
                        />
                    </Badge>

                </Grid>
                <Grid item xs={6}>
                    <Badge
                        badgeContent={isSaurabhTyping ? "Saurabh is Typing" : 0} color="primary">
                        <Tushar
                            txtSaurabh={txtSaurabh}
                            setTxtTushar={setTxtTushar}
                            txtTushar={txtTushar}
                            setIsTusharTyping={setIsTusharTyping}
                        />
                    </Badge>
                </Grid>
            </Grid>
        </div>
    )
}