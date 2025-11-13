
const InputField = ({ label, ...props }) => (
  <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
    <label style={{ fontSize: '14px', fontWeight: '500', color: '#4b5563', marginBottom: '4px' }}>{label}</label>
    <input
      className="input-field" 
      {...props}
    />
  </div>
);

export default InputField;