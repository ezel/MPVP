import { Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={`subs/psv`}>Pokemon Speed Viewer</Link>
                    </li>
                    <li>
                        <Link to={`subs/vt`}>VGCTrans</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}