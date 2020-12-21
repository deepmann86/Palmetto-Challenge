import React, {useState} from 'react';
import ImageSearchForm from "./Components/ImageSearchForm";
import SavedImages from "./Components/SavedImages";
import './App.css';

function App() {
    const [idsList, saveIdsList] = useState([]);
    const saveImageId = (picId, pageURL) => {
        if(idsList.filter(({id}) => id === picId).length) {
            return null;
        }
        saveIdsList([...idsList, {id: picId,  pageURL}])
    };
    return (
    <div className="App">
        <ImageSearchForm saveImageId={saveImageId} idsList={idsList}/>
        <SavedImages idsList={idsList} />
    </div>
    );
}

export default App;
