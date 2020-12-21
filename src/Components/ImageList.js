import React from 'react';
import PropTypes from "prop-types";
import { FaThumbsUp, FaStar } from 'react-icons/fa';

const ImageList = props => {
    const {list, isLoading, saveImageId, idsList} = props;
    const getTags = (tags="") => tags.split(",").map((t, index) => <span key={index} className="tags-item">{t}</span>);
    const isImageSaved = id => idsList.filter(list => list.id === id).length;

    return (
    <div className="category-list">
        {isLoading
        ? <div>Loading...</div>
        : (list || []).map(({previewURL, tags, favorites, likes, id, pageURL, user}, index) =>  (
        <div className="list-item" key={index}>
            <div className="image-wrapper">
{/*
                {isImageSaved(id) ? <span className="img-saved">Saved</span> : <span className="img-not-saved">Save</span>}
*/}
                <img src={previewURL} alt={user} />
                {isImageSaved(id) ? <button className="img-saved">Saved </button> :
                <button className="img-not-saved" onClick={() => saveImageId(id, pageURL)}>Save</button>}
            </div>

            <div className="wrapper">
                <div className="tags">
                    {getTags(tags)}
                </div>
                <div className="likes-fav">
                    <span>{likes} <FaThumbsUp /></span>
                    <span>{favorites} <FaStar /></span>
                </div>
            </div>
        </div>
        )
        )}
    </div>
    );
}

ImageList.propTypes = {
    list: PropTypes.array,
    isLoading: PropTypes.bool,
    saveImageId: PropTypes.func,
    idsList: PropTypes.array,
};

export default ImageList;