/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData, redirect } from "react-router-dom";
//import { useState, useEffect } from "react";
//import { lazy, Suspense } from 'react';
//import SearchBox from '../sublibs/vt.lib.js';
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
                return <SpeedViewer initPMNames={["Incineroar", "Kyogre"]} />;
            case 'vt':
                return <div>vt</div>;
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
                <p>subname {subName} </p>
                {renderBasedOnSub()}
            </div>
        </>
    )
}