/* eslint-disable no-console */
const Message = ({type, message}) => {
  switch (type) {
    case 'error': {
      return console.error(message);
    }
    case 'warn': {
      return console.warn(message);
    }
    default: {
      return console.log(message);
    }
  }
};

export default Message;