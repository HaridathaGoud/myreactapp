

import { Alert } from 'antd';
import React, { useCallback, useEffect ,useState} from 'react';

const ErrorMessage = ({ msg, onClose }) => {
  const [message, setMessage] = useState();
  useEffect(() => {
    if (msg) {
      setMessage(msg)
    }
  }, [msg])
  const closeErrorMessage = useCallback(() => {
    setMessage(null);
    if (onClose) {
      onClose();
    }
  },[onClose])
  return (
    <div className='mt-3'>
      {message && <Alert
        className="w-100 mb-3 px-3 py-2 banks-errmsg icon-bg items-center mx-3"
        type="error"
        description={message}
        showIcon
        onClose={closeErrorMessage}
        closable
      />}
    </div>
  );
};
export default ErrorMessage;

