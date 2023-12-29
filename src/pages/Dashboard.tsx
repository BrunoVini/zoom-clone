import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiImage } from '@elastic/eui';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import dashboard1 from '../assets/dashboard1.png';
import dashboard2 from '../assets/dashboard2.png';
import dashboard3 from '../assets/dashboard3.png';
import { Header } from '../components/Header';

const Dashboard = () => {
  useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}>
        <Header />

        <EuiFlexGroup
          justifyContent='center'
          alignItems='center'
          style={{ margin: "5vh 10vh" }}
        >
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="5rem" alt="icon" src={dashboard1} />}
              title={`Create Meeting`}
              description="Create a new meeting and invite people"
              onClick={() => navigate("/create-meeting")}
              paddingSize='xl'
            />
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="100%" alt="icon" src={dashboard2} />}
              title={`My Meetings`}
              description="View your created meetings"
              onClick={() => navigate("/my-meetings")}
              paddingSize='xl'
            />
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="5rem" alt="icon" src={dashboard3} />}
              title={`Meetings`}
              description="View the meetings you have been invited to"
              onClick={() => navigate("/meeting")}
              paddingSize='xl'
            />
          </EuiFlexItem>

        </EuiFlexGroup>

      </div>
    </>
  );
};

export default Dashboard;
