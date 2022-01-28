import React, { useState } from 'react';
import TasksScreen from './tasks';
import MainScreen from './main';

const PageMap = {
    1: MainScreen,
    2: TasksScreen,
}

export default function Page() {
    const [index, setIndex] = useState(1);
    const changePage = (id) => setIndex(id);

    const RenderElement = PageMap[index];

    return <RenderElement changePage={changePage} />
}