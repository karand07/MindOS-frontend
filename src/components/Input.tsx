interface InputProps {
  label?: string;
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
  error?: string;
}

function Input({
  label,
  placeholder,
  type = "text",
  onChange,
  error,
}: InputProps) {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2 rounded-md border outline-none focus:ring-2 
        ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-indigo-300"}`}
      />

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

export default Input;