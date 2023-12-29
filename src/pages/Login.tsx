import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiImage, EuiPanel, EuiProvider, EuiSpacer, EuiText, EuiTextColor } from '@elastic/eui';
import { useState } from 'react';
import animation from '../assets/animation.gif';
import logo from '../assets/logo.png';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <EuiProvider colorMode='dark'>
      <EuiFlexGroup
        alignItems='center'
        justifyContent='center'
        style={{ width: "100vw", height: "100vh" }}
      >

        <EuiFlexItem grow={false}>
          <EuiPanel paddingSize='xl'>
            <EuiFlexGroup justifyContent='center' alignItems='center'>
              <EuiFlexItem>
                <EuiImage src={animation} alt='logo' />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiImage src={logo} alt='logo' size="230px" />
                <EuiSpacer size='xs' />
                <EuiText textAlign='center' grow={false} style={{ maxInlineSize: "none" }}>
                  <h3>
                    <EuiTextColor>One Platform to</EuiTextColor>
                    <EuiTextColor color='#0b5cff'> conecct</EuiTextColor>
                  </h3>
                </EuiText>
                <EuiSpacer size='l' />
                <EuiButton fill>
                  Login with Google
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>

      </EuiFlexGroup>

    </EuiProvider>
  );
};

export default Login;
