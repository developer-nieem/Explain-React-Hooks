import React from 'react';
import Select from '../../components/Select';

const SelectItem = () => {
    return (
        <div>
            <Select>
                <Select.SelectOption item='option1'>option1</Select.SelectOption>
                <Select.SelectOption item='option2'>option2</Select.SelectOption>
                <Select.SelectOption item='option3'>option3</Select.SelectOption>
                <Select.SelectOption item='option4'>option4</Select.SelectOption>
                <Select.SelectOption item='option5'>option5</Select.SelectOption>
            </Select>
        </div>
    );
};

export default SelectItem;