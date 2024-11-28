import React from "react";

export const CustomInput: React.FC<{
  label: string;
  type?: React.HTMLInputTypeAttribute | "textarea" | undefined;
  name: string;
  placeholder: string;
  className?: string;
}> = ({ label, type = "text", name, placeholder, className }) => {
  return (
    <div className="flex flex-col w-full md:max-w-[404px] mx-auto gap-3">
      <label htmlFor={name} className="text-[#6B7280]">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea placeholder={placeholder} name={name} id={name} rows={4} className={`border border-[#E5E7EB] rounded py-3 px-2 w-full outline-none ${className}`} />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`border border-[#E5E7EB] rounded w-full outline-none h-11 py-3 px-4 ${className}`}
        />
      )}
    </div>
  );
};
