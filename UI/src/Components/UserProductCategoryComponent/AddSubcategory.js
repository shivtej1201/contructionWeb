import React from 'react'
import './AddSubcategory.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {_apiURLCategory, _apiURLSubCategory } from '../../apiUrl';

function AddSubCategory() {
    const [file, setFile] = useState()
    const [catName, setCatName] = useState();
    const [subcatName, setSubCatName] = useState();
    const [output, setOutput] = useState();
    const [CDetails,setCategoryDetails] = useState([]);

    useEffect(() => {
        axios.get(_apiURLCategory+"fetch").then((result)=>{
            setCategoryDetails(result.data);
        });
    },[]);

    const handleChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert("hello");
        var formData = new FormData();
        formData.append('catnm', catName);
        formData.append('subcatnm', subcatName);
        formData.append('caticon', file);
        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_apiURLSubCategory + "save", formData, config).then((response) => {
            setCatName("");
            setOutput("SubCategory Added Successfully....");
        });
    }
    return (
        <div>
            <div className="about_section layout_padding" id='scroll'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_main" id='scroll1'>
                                <div className="about_taital">AddSubCategory!!!</div>
                                <font style={{ "color": "blue" }}>{output}</font>
                                <form onSubmit={handleSubmit} >
                                    <div class="form-group">
                                        <label for="catnm">Category Name:</label>
                                        <div class="form-group">
                            
                              <select  class="form-control" value={catName}
                                            onChange={e => setCatName(e.target.value)}>
                                 <option>Select Category</option>
                                 
                                 {
                                    CDetails.map((row)=>(
                                        <option>{row.catnm}</option>
                                    ))
                                 }
                                 
                              </select>
                           </div>
                                         
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="Subcatnm"> Sub Category Name:</label>
                                        <input class="form-control" type="text" value={subcatName}
                                            onChange={e => setSubCatName(e.target.value)} />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="caticon"> Sub Category Icon:</label>
                                        <input type="file" onChange={handleChange} />
                                    </div>
                                    <br />
                                    <button type="submit" class="btn btn-success">Add Sub Category</button>
                                </form>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_img"><img src="assets/images/user1.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddSubCategory;
