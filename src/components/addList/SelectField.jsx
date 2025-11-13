const SelectField = ({ label, options, ...props }) => (
  <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
    <label style={{ fontSize: '14px', fontWeight: '500', color: '#4b5563', marginBottom: '4px' }}>{label}</label>
    <select
      className="input-field select-field" 
      {...props}
      style={{ backgroundColor: '#fff' }}
    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default SelectField;