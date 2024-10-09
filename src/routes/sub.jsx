/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData, redirect } from "react-router-dom";
//import { useState, useEffect } from "react";
//import { lazy, Suspense } from 'react';
import TranslateBox from '../sublibs/vt.lib.jsx';
import SpeedViewer from '../sublibs/psv.lib.jsx';

export async function loader({ params }) {
    // normalize the params
    const subNameList = ['psv','vt'];
    const fullNameList = ['Pokemon Speed Viewer', 'VGCTrans'];
    const pName = params.subName;
    const pIndex = subNameList.indexOf(pName);
    if (pIndex !== -1) {
        return { subName: pName, fullName: fullNameList[pIndex] };
    } else {
        return redirect('/404');
    }
}

export default function Sub() {
    const { subName, fullName } = useLoaderData();
    //const [SubComponent, setSubComponent] = useState(null);
    //const SearchBox = lazy(() => import('../sublibs/vt.lib'));
    //const SpeedViewer = lazy(() => import('../sublibs/psv.lib'));

    const renderBasedOnSub = () => {
        switch (subName) {
            case 'psv':
                const names = ['Gholdengo','Archaludon','Rillaboom','Dragonite','Incineroar','Amoonguss','Ursaluna-Bloodmoon','Kingambit','Sneasler','Primarina','Dondozo','Maushold','Annihilape','Pelipper','Garchomp','Tatsugiri','Whimsicott','Talonflame','Basculegion','Volcarona','Indeedee-F','Tyranitar','Dragapult','Murkrow','Typhlosion-Hisui','Ursaluna','Porygon2','Farigiraf','Meowscarada','Glimmora','Torkoal','Electabuzz','Hydreigon','Ninetales-Alola','Clefable','Indeedee','Armarouge','Sinistcha','Gallade','Salamence','Sylveon','Grimmsnarl','Arcanine-Hisui','Pawmot','Tauros-Paldea-Aqua','Zoroark-Hisui','Lilligant-Hisui','Hatterene','Flamigo','Palafin','Excadrill','Decidueye-Hisui','Kommo-o','Baxcalibur',];
                return <SpeedViewer initPMNames={names} />;
            case 'vt':
                return <TranslateBox />;
            default:
                return <div> no matching component</div>
        }
    };

    return (
        <>
            <div id="navbar">
                <Link to={"/"}>Home</Link> &gt;&nbsp;
                <span>{fullName}</span>
            </div>
            <div id="sub">
                {renderBasedOnSub()}
            </div>
        </>
    )
}