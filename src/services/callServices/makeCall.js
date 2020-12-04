import call from 'react-native-phone-call';

function makeCall(phone) {
  if (phone.length !== 7) {
    alert('This contact has an invalid phone number');
    return;
  }
  console.log('length is incorrect:', phone.length);

  const args = {
    number: phone,
    prompt: true,
  };
  call(args).catch(console.error);
}

export default makeCall;
