import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState( ['No Game No Life'] );

    // const handleAdd = () => {
    //     setCategories( [...categories, 'No Game No Life'] );
    //     setCategories( cats => [...cats, 'No Game No Life']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>

            

            <ol>

                {
                    categories.map( category => 

                        <GifGrid 
                            category={ category }
                            key={category}
                        />          
                    )
                }
            </ol>
        </>
    )
}
