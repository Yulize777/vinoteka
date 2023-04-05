import React from "react";
import Welcome from "./Welcome/Welcome";
import {Cozy} from "./Cozy/Cozy";
import {Love} from "./Love/Love";
import {Red} from "./Red/Red";
import {Rose} from "./Rose/Rose";
import {White} from "./White/White";
import {Card} from "./Card/Card";
import {Popular} from "./Popular/Popular";
import {Last} from "./Last/Last";


export const Home = () => {

    return(
        <>
          <Welcome/>
            <Popular/>
            <Cozy/>
            <Love/>
            <Red/>
            <Rose/>
            <White/>
            <Last/>
            <Card/>
        </>
    )
}