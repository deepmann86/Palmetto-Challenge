import React, {useState} from 'react';
import PropTypes from "prop-types";
import axios from 'axios/lib/axios';
import ImageList from "./ImageList";
const API_KEY = "19572835-5453a08404220d3ee32131e8c";
const categories = ["fashion", "nature", "backgrounds", "science", "education", "people", "feelings", "religion",
    "health", "places", "animals", "industry", "food", "computer", "sports", "transportation", "travel", "buildings",
    "business", "music"];

const ImageSearchForm = (props) => {
    const { saveImageId, idsList } = props;
    const [state, setState] = useState({
        list: [],
        keyword: "",
        category: "",
        isLoading: false
    });
    const onSubmit = (e) => {
        const {keyword, category} = state;
        setState({...state, isLoading: true})
        e.preventDefault();

        axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${keyword}+${category}&image_type=photo`)
        .then((res) => {
            const { data } = res;
            setState({...state, list: data.hits || [], isLoading: false})
        });
    };

    const {isLoading, list} = state;
    return (
    <div>
        <form className="image-search-form" onSubmit={onSubmit}>
            <input
            type="text"
            placeholder="keyword..."
            onChange={({target}) => setState({ ...state, keyword: target.value })}/>

            <select name="categories" onChange={({target}) => setState({ ...state, category: target.value })} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Category...</option>
                {categories.map((c, index) => <option value={c} key={index}>{c}</option>)}
            </select>
            <button type="submit">Search</button>
        </form>
        <ImageList list={list} isLoading={isLoading} saveImageId={saveImageId} idsList={idsList}/>
    </div>
    );
}

ImageSearchForm.propTypes = {
    saveImageId: PropTypes.func,
    idsList: PropTypes.array,
};

export default ImageSearchForm;