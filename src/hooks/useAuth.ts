
// 認証コンテキストとカスタムフック
// AuthContext.tsx と useAuth.ts を使用して認証状態を管理します。
// frontend/src/hooks/useAuth.ts
import { useAuthContext } from '../contexts/AuthContext';

const useAuth = () => {
  return useAuthContext();
};

export default useAuth;