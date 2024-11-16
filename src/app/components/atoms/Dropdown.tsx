import React from 'react';
import Select from 'react-select';

type DropdownProps = {
  options: { value: string; label: string }[];
  defaultValue: { value: string; label: string };
  isSearchable?: boolean;
  isClearable?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue,
  isSearchable = true,
  isClearable = false,
}) => {
  const customStyles = React.useMemo(
    () => ({
      control: (provided: any) => ({
        ...provided,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: '#ffffff',
        padding: '0.5rem',
        borderRadius: '0.375rem',
        boxShadow: 'none',
        '&:hover': {
          borderColor: 'transparent',
        },
      }),
      singleValue: (provided: any) => ({
        ...provided,
        color: '#ffffff',
      }),
      menu: (provided: any) => ({
        ...provided,
        backgroundColor: '#ffffff',
        borderRadius: '0.375rem',
        minWidth: '200px',
        maxWidth: '300px',
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#f0f0f0' : '#ffffff',
        color: '#1a202c',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }),
      dropdownIndicator: (provided: any) => ({
        ...provided,
        color: '#ffffff',
        '&:hover': {
          color: '#ffffff',
        },
      }),
      indicatorSeparator: () => ({
        display: 'none',
      }),
    }),
    []
  );

  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      styles={customStyles}
      components={{ DropdownIndicator }}
      isSearchable={isSearchable}
      isClearable={isClearable}
      aria-label="Custom Dropdown"
    />
  );
};

const DropdownIndicator = (props: any) => (
  <div {...props.innerProps} className="flex items-center px-2 text-white">
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>
);

export default Dropdown;
