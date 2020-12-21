import React from 'react';
import PropTypes from "prop-types";
import { FaExternalLinkAlt } from 'react-icons/fa';


const SavedImages = ({idsList}) => (
<div className="searched-category">
    {idsList.length ? <h2>Saved Images</h2> : <h2> No Saved Images</h2>}
    <ul className="saved-images">
        {idsList.map(({ id, pageURL }, index) => <li key={index}><a href={pageURL} target="_blank" rel="noreferrer"># {id} <FaExternalLinkAlt /></a></li>)}
    </ul>
</div>
);

SavedImages.propTypes = {
    idsList: PropTypes.array,
};

export default SavedImages;