import React from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={signOut}>Sair</Button>
    </>
  );
};

export default Dashboard;
