import React from 'react'
import './Addcategory.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiURLCategory,  } from '../../apiUrl.js';

function AddCategory() {
    const [file, setFile] = useState()
    const [catName, setCatName] = useState();
    const [output, setOutput] = useState();

    const handleChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert("hello");
        var formData = new FormData();
        formData.append('catnm', catName);
        formData.append('caticon', file);
        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_apiURLCategory + "save", formData, config).then((response) => {
            setCatName("");
            setOutput("Category Added Successfully....");
        });
    }
    return (
        <div>
            <div className="about_section layout_padding" id='scroll'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_main" id='scroll1'>
                                <div className="about_taital">AddCategory!!!</div>
                                <font style={{ "color": "blue" }}>{output}</font>
                                <form onSubmit={handleSubmit} >
                                    <div class="form-group">
                                        <label for="catnm">Category Name:</label>
                                        <input class="form-control" type="text" value={catName}
                                            onChange={e => setCatName(e.target.value)} />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="caticon">Category Icon:</label>
                                        <input type="file" onChange={handleChange} />
                                    </div>
                                    <br />
                                    <button type="submit" class="btn btn-success">Add Category</button>
                                </form>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_img"><img src="assets/images/category.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategory;
