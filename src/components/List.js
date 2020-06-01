import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadList } from '../redux/actions/list';

export default function List() {
    const dispatch = useDispatch();
    const { isLoading, list } = useSelector(state => state);

    useEffect(() => {
        dispatch(loadList())
    }, []);

    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {Object.keys(list).length > 0 ?
                <div className='list_wrapper'>
                    <div className="row">
                        <div className="column header">Currency</div>
                        <div className="column header">Rate</div>
                    </div>
                    {Object.keys(list.rates).map(key =>
                        <div key={key} className="row">
                            <div className="column">{key}</div>
                            <div className="column">{list.rates[key]}</div>
                        </div>
                    )}
                </div> : ''}
        </div>
    )
}
