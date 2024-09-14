import { forwardRef } from "react"

const InputForm = forwardRef (
    (props, ref) => {
    const { label, name, type, placeholder, value, onChange } = props
    return(
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} placeholder={placeholder} ref={ref} value={value} onChange={onChange} />
        </div>
    )
}
)

const Label = (props) => {
    const {htmlFor, children} = props
    return (
        <label htmlFor={htmlFor} className="block text-slate-600 text-sm font-bold mb-2">{children}</label>
    )
}

const Input = forwardRef(
    (props, ref) => {
    const {type, name, placeholder, value, onChange} = props;
    return (
        <input type={type} name={name} id={name} className="text-sm border rounded w-full text-slate-800 py-3 px-2 placeholder: opacity-50" placeholder={placeholder} ref={ref} onChange={onChange} value={value}/>  
    );
});



export default InputForm