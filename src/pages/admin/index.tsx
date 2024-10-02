// frontend/src/pages/admin/dashboard.tsx

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import authProvider from '../../utils/AuthProvider';

const AdminApp = dynamic(() => import('../../components/AdminApp'), { ssr: false });

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    authProvider.checkAuth().catch(() => {
      router.push('/auth/login');
    });
  }, [router]);

  return <AdminApp />;
};

export default DashboardPage;
