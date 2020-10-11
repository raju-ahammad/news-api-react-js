import React from 'react'
import { NewsItem } from './NewsItem'

export const NewsList = ({news}) => {
    return (
        <div>
            {news && news.length === 0 && <h4>There is no nrews</h4>}
            {news && news.map(item=> <NewsItem key={ item.title } item={item}/>)}
        </div>
    )
}
