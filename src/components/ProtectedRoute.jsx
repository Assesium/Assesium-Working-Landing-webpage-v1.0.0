import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '../stores/authStore';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireAdmin && user?.role !== 'ADMINISTRATOR') {
    // Redirect to home if admin access required but user is not admin
    return <Navigate to="/" replace />;
  }

  if (user?.status !== 'ACTIVE') {
    // Redirect to suspended page if user is not active
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Account Suspended</h1>
          <p className="text-muted-foreground">
            Your account has been suspended. Please contact support for assistance.
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;

