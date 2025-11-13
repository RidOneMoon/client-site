const TextAreaField = ({ label, ...props }) => (
  <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
    <label style={{ fontSize: '14px', fontWeight: '500', color: '#4b5563', marginBottom: '4px' }}>{label}</label>
    <textarea
      className="input-field textarea-field" 
      rows={4}
      {...props}
    ></textarea>
  </div>
);



export default TextAreaField;