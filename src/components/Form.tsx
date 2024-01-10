import { forwardRef } from "react";

type TClass = {
    className : string
}


const Form = forwardRef<HTMLInputElement , TClass>(({className}, inputRef) => {

    const submitHandler = (e : React.FormEvent) =>{
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input ref={inputRef}  type="text" className={className} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
});

export default Form;