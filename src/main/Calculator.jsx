import { useState } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: 0,
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

const Calculator = props => {
    const [calc, setCalc] = useState({...initialState}) 

    function clearMemory() {
        setCalc({...initialState})
    }

    function setOperation(operation) {

    }

    function addDigit(n) {
        if(n === '.' && calc.displayValue.includes('.'))
            return

        const clearDisplay = +calc.displayValue === 0 || calc.clearDisplay,
            currentValue = clearDisplay ? '' : calc.displayValue,
            displayValue = currentValue + n

        setCalc({ displayValue, clearDisplay: false })

        if(n !== '.') {
            const newValue = parseFloat(displayValue),
                values = [...calc.values]

            values[calc.current] = newValue
            setCalc({values})
            console.log(calc.values)
        }
    }

    return (
        <div className="calculator">
            <Display value={calc.displayValue}/>
            <Button click={clearMemory} triple label="AC"/>
            <Button click={setOperation} operation label="/"/>
            <Button click={addDigit} label="7"/>
            <Button click={addDigit} label="8"/>
            <Button click={addDigit} label="9"/>
            <Button click={setOperation} operation label="*"/>
            <Button click={addDigit} label="4"/>
            <Button click={addDigit} label="5"/>
            <Button click={addDigit} label="6"/>
            <Button click={setOperation} operation label="-"/>
            <Button click={addDigit} label="1"/>
            <Button click={addDigit} label="2"/>
            <Button click={addDigit} label="3"/>
            <Button click={setOperation} operation label="+"/>
            <Button click={addDigit} double label="0"/>
            <Button click={addDigit} label="."/>
            <Button click={setOperation} operation label="="/>
        </div>
    )
}

export default Calculator