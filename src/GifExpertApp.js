import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['Pokemon', 'Berserk', 'Tate no Yuusha', 'Tensei Shitara']
    const [categories, setCategories] = useState(['Berserk']);

    // const handleAdd = () => {

    //     setCategories( [...categories, 'Pokemon'] );

    // };



    return (
        <>

            <h2>GifExpertApp</h2>

            <AddCategory setCategories = { setCategories }/>

            <hr />



            <ol>
                {
                    categories.map(category => 
                        (<GifGrid 
                        key = { category }
                        category = { category }/>))
                }
            </ol>

        </>
    );
}


export default GifExpertApp;