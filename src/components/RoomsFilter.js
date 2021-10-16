import React, {useContext} from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
//get all unique values 
const getUnique = (items, value) => {
    return [... new Set(items.map(item => item[value]))]
} 

function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity ,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    // get unique types
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    // map types to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    let pepole = getUnique(rooms, 'capacity');
    pepole = pepole.map((item,index) => {
        return<option key={index} value={item}>{item}</option>
    })

    return (
        <section className='filter-container'>
            <Title title='search rooms'/>
            <form className='filter-form'>
                {/*Start select type */}
                <div className='form-group'>
                    <label htmlFor='type'>Room Type</label>
                    <select 
                    name='type'
                    id='type' 
                    className='form-control' 
                    value= {type} 
                    onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* End select type */}
                
                {/*Start select guests */}
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select 
                    name='capacity'
                    id='capacity' 
                    className='form-control' 
                    value= {capacity} 
                    onChange={handleChange}>
                        {pepole}
                    </select>
                </div>
                {/* End select guests */}
                {/* Start room price */}
                <div className='form-group'>
                    <label htmlFor='price'>
                        room price ${price}
                    </label>
                    <input type='range' name='price' min={minPrice} max={maxPrice}
                    id='price' value={price} onChange={handleChange} className='form-control'></input>
                </div>
                {/* End room price */}

                {/*Start room size */}
                <div className='form-group'>
                    <label htmlFor='size'>Room Size</label>
                    <div className='size-inputs'>
                        <input type='number' name='minSize' id='size' 
                        value={minSize} onChange={handleChange} className='size-input'/>
                        <input type='number' name='maxSize' id='size' 
                        value={maxSize} onChange={handleChange} className='size-input'/>
                        
                    </div>
                </div>
                {/* End room size */}
                {/* Start extras */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breakfast' id='breakfast'
                        checked={breakfast} onChange={handleChange}/>
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                    {/* End breakfast */}
                    <div className='single-extra'>
                        <input type='checkbox' name='pets' id='pets'
                        checked={pets} onChange={handleChange}/>
                        <label htmlFor='pets'>pets</label>
                    </div>
                    {/* End pets */}
                </div>
                {/* Endextras */}
            </form>
        </section>
    )
}
export default  RoomsFilter;
