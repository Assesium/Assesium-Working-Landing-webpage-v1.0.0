import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, FileText, Shield, Activity, Ban, UserCheck, UserX, Trash2, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { adminAPI } from '../lib/api'
import { useAuth } from '../hooks/useAuth'

const AdminPage = () => {
  const [selectedUserId, setSelectedUserId] = useState(null)
  const { user, isAdmin } = useAuth()
  const queryClient = useQueryClient()

  // Fetch admin stats
  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: adminAPI.getStats,
    enabled: isAdmin,
  })

  // Fetch all users
  const { data: usersData, isLoading: usersLoading } = useQuery({
    queryKey: ['admin-users'],
    queryFn: () => adminAPI.getAllUsers({ limit: 50 }),
    enabled: isAdmin,
  })

  // Update user status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ userId, status }) => adminAPI.updateUserStatus(userId, status),
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-users'])
      queryClient.invalidateQueries(['admin-stats'])
    },
  })

  // Delete user mutation
  const deleteUserMutation = useMutation({
    mutationFn: adminAPI.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['admin-users'])
      queryClient.invalidateQueries(['admin-stats'])
    },
  })

  const handleStatusChange = (userId, newStatus) => {
    updateStatusMutation.mutate({ userId, status: newStatus })
  }

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      deleteUserMutation.mutate(userId)
    }
  }

  const getStatusBadge = (status) => {
    const variants = {
      ACTIVE: 'default',
      SUSPENDED: 'secondary',
      BANNED: 'destructive',
    }
    return (
      <Badge variant={variants[status] || 'default'}>
        {status.toLowerCase()}
      </Badge>
    )
  }

  const getRoleBadge = (role) => {
    return (
      <Badge variant={role === 'ADMINISTRATOR' ? 'default' : 'outline'}>
        {role === 'ADMINISTRATOR' ? 'Admin' : 'User'}
      </Badge>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground">You need administrator privileges to access this page.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage users and monitor system activity</p>
          </div>

          {/* Stats Cards */}
          {statsData && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{statsData.data.stats.users.total}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <UserCheck className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{statsData.data.stats.users.active}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Suspended Users</CardTitle>
                  <UserX className="h-4 w-4 text-yellow-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">{statsData.data.stats.users.suspended}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{statsData.data.stats.blogPosts.total}</div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage user accounts and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              {usersLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-assesium-accent"></div>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>School</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Posts</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usersData?.data.users.map((userData) => (
                      <TableRow key={userData.id}>
                        <TableCell className="font-medium">
                          {userData.firstName} {userData.lastName}
                        </TableCell>
                        <TableCell>{userData.email}</TableCell>
                        <TableCell>{userData.schoolName || 'N/A'}</TableCell>
                        <TableCell>{getRoleBadge(userData.role)}</TableCell>
                        <TableCell>{getStatusBadge(userData.status)}</TableCell>
                        <TableCell>{userData._count.blogPosts}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {userData.id !== user?.id && userData.role !== 'ADMINISTRATOR' && (
                              <>
                                <Select
                                  value={userData.status}
                                  onValueChange={(value) => handleStatusChange(userData.id, value)}
                                  disabled={updateStatusMutation.isPending}
                                >
                                  <SelectTrigger className="w-32">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="ACTIVE">Active</SelectItem>
                                    <SelectItem value="SUSPENDED">Suspended</SelectItem>
                                    <SelectItem value="BANNED">Banned</SelectItem>
                                  </SelectContent>
                                </Select>
                                
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleDeleteUser(userData.id)}
                                  disabled={deleteUserMutation.isPending}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminPage

