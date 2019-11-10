import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import {
    ReactRegulator,
    ReactRegulatorProps,
    WebComponentRegulator
} from 'devjs7-components'

// import 'devjs7-components';
// const b: boolean = declaredFunction("");

import './App.css';
import _ from 'lodash';

const App: FunctionComponent<{}> = () => {

    const [value, setValue] = useState<string>("50");
    const ref = useRef<WebComponentRegulator>(null);

    let parsedValue = _.clamp(parseInt(value), 0, 100) || 0;

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        ref.current.percentageNumber = parsedValue;

    }, [value]);

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        ref.current.onChange = (val) => setValue(val.toString())
    }, []);

    return (
        <div className="App">
            <input className={"percentage-input"}
                   value={value}
                   onChange={e => setValue(e.target.value)}/>

            <ReactRegulator percentageNumber={parsedValue}
                            onChange={val => setValue(val.toString())}/>

            <web-component-regulator ref={ref}/>
        </div>
    );
};

export default App;
