import React from 'react';
import './Widget.css'

function Widget() {
    return (
        <div className="widget">
        <h3>Sponsored</h3>
            <iframe 
            src="https://www.lpu.in/placements.php"
            width="340"
            height="100%"
            style={{border:"none",overflow:"hidden"}}
            scrolling="no"
            frameBorder="0"
            title="Sponsored"
            allowTransparency="true"
            allow="encrypted-media"></ iframe>

            <iframe 
            src="https://www.limely.co.uk/?gclid=EAIaIQobChMIw8eW8u-f8gIVg0NgCh28BQAGEAAYASAAEgI0WfD_BwE"
            width="340"
            height="100%"
            style={{border:"none",overflow:"hidden"}}
            scrolling="no"
            frameBorder="0"
            title="Sponsored"
            allowTransparency="true"
            allow="encrypted-media"></ iframe>
        </div>
    )
}

export default Widget
