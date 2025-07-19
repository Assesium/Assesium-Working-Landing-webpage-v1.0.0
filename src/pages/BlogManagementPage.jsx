import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Image, Upload, Link as LinkIcon, Save, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { blogAPI } from '../lib/api'
import { useAuth } from '../hooks/useAuth'

const BlogManagementPage = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: ''
  })
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState('')
  const [uploadMethod, setUploadMethod] = useState('url') // 'url' or 'upload'
  const fileInputRef = useRef(null)

  const { user, isAuthenticated } = useAuth()
  const queryClient = useQueryClient()

  // Fetch user's blog posts
  const { data: postsData, isLoading: postsLoading } = useQuery({
    queryKey: ['user-blog-posts'],
    queryFn: () => blogAPI.getUserPosts({ limit: 50 }),
    enabled: isAuthenticated,
  })

  // Create blog post mutation
  const createPostMutation = useMutation({
    mutationFn: blogAPI.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['user-blog-posts'])
      queryClient.invalidateQueries(['blog-posts'])
      resetForm()
      setIsCreateDialogOpen(false)
    },
  })

  // Update blog post mutation
  const updatePostMutation = useMutation({
    mutationFn: ({ id, data }) => blogAPI.updatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['user-blog-posts'])
      queryClient.invalidateQueries(['blog-posts'])
      resetForm()
      setEditingPost(null)
    },
  })

  // Delete blog post mutation
  const deletePostMutation = useMutation({
    mutationFn: blogAPI.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['user-blog-posts'])
      queryClient.invalidateQueries(['blog-posts'])
    },
  })

  // Upload image mutation
  const uploadImageMutation = useMutation({
    mutationFn: blogAPI.uploadImage,
    onSuccess: (data) => {
      setFormData(prev => ({ ...prev, imageUrl: data.data.imageUrl }))
      setImagePreview(data.data.imageUrl)
    },
  })

  const resetForm = () => {
    setFormData({ title: '', content: '', imageUrl: '' })
    setImageFile(null)
    setImagePreview('')
    setUploadMethod('url')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (name === 'imageUrl') {
      setImagePreview(value)
    }
  }

  const handleImageFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = (e) => setImagePreview(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleImageUpload = async () => {
    if (imageFile) {
      uploadImageMutation.mutate(imageFile)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    let finalImageUrl = formData.imageUrl

    // Upload image if file is selected
    if (uploadMethod === 'upload' && imageFile && !formData.imageUrl) {
      try {
        const uploadResult = await uploadImageMutation.mutateAsync(imageFile)
        finalImageUrl = uploadResult.data.imageUrl
      } catch (error) {
        console.error('Image upload failed:', error)
        return
      }
    }

    const postData = {
      ...formData,
      imageUrl: finalImageUrl
    }

    if (editingPost) {
      updatePostMutation.mutate({ id: editingPost.id, data: postData })
    } else {
      createPostMutation.mutate(postData)
    }
  }

  const handleEdit = (post) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      content: post.content,
      imageUrl: post.imageUrl || ''
    })
    setImagePreview(post.imageUrl || '')
  }

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      deletePostMutation.mutate(postId)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Authentication Required</h1>
          <p className="text-muted-foreground">Please log in to manage your blog posts.</p>
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
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Blog Management</h1>
              <p className="text-muted-foreground">Create and manage your blog posts</p>
            </div>
            
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-assesium-accent hover:bg-assesium-accent/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Create New Blog Post</DialogTitle>
                  <DialogDescription>
                    Write and publish a new blog post
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter blog post title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      placeholder="Write your blog post content here..."
                      rows={8}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Featured Image</Label>
                    
                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        variant={uploadMethod === 'url' ? 'default' : 'outline'}
                        onClick={() => setUploadMethod('url')}
                      >
                        <LinkIcon className="h-4 w-4 mr-2" />
                        Image URL
                      </Button>
                      <Button
                        type="button"
                        variant={uploadMethod === 'upload' ? 'default' : 'outline'}
                        onClick={() => setUploadMethod('upload')}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Image
                      </Button>
                    </div>

                    {uploadMethod === 'url' ? (
                      <div className="space-y-2">
                        <Input
                          name="imageUrl"
                          value={formData.imageUrl}
                          onChange={handleInputChange}
                          placeholder="Enter image URL"
                        />
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageFileChange}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Image className="h-4 w-4 mr-2" />
                          Choose Image
                        </Button>
                        {imageFile && (
                          <Button
                            type="button"
                            onClick={handleImageUpload}
                            disabled={uploadImageMutation.isPending}
                          >
                            {uploadImageMutation.isPending ? 'Uploading...' : 'Upload Image'}
                          </Button>
                        )}
                      </div>
                    )}

                    {imagePreview && (
                      <div className="mt-4">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        resetForm()
                        setIsCreateDialogOpen(false)
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={createPostMutation.isPending}
                    >
                      {createPostMutation.isPending ? 'Creating...' : 'Create Post'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Edit Dialog */}
          <Dialog open={!!editingPost} onOpenChange={() => setEditingPost(null)}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Edit Blog Post</DialogTitle>
                <DialogDescription>
                  Update your blog post
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="edit-title">Title</Label>
                  <Input
                    id="edit-title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter blog post title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="edit-content">Content</Label>
                  <Textarea
                    id="edit-content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Write your blog post content here..."
                    rows={8}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label>Featured Image</Label>
                  
                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant={uploadMethod === 'url' ? 'default' : 'outline'}
                      onClick={() => setUploadMethod('url')}
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      Image URL
                    </Button>
                    <Button
                      type="button"
                      variant={uploadMethod === 'upload' ? 'default' : 'outline'}
                      onClick={() => setUploadMethod('upload')}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Image
                    </Button>
                  </div>

                  {uploadMethod === 'url' ? (
                    <div className="space-y-2">
                      <Input
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        placeholder="Enter image URL"
                      />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileChange}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Image className="h-4 w-4 mr-2" />
                        Choose Image
                      </Button>
                      {imageFile && (
                        <Button
                          type="button"
                          onClick={handleImageUpload}
                          disabled={uploadImageMutation.isPending}
                        >
                          {uploadImageMutation.isPending ? 'Uploading...' : 'Upload Image'}
                        </Button>
                      )}
                    </div>
                  )}

                  {imagePreview && (
                    <div className="mt-4">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      resetForm()
                      setEditingPost(null)
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={updatePostMutation.isPending}
                  >
                    {updatePostMutation.isPending ? 'Updating...' : 'Update Post'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          {/* Blog Posts List */}
          <div className="space-y-6">
            {postsLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-assesium-accent"></div>
              </div>
            ) : postsData?.data.blogPosts.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">No blog posts yet</h3>
                  <p className="text-muted-foreground mb-4">Create your first blog post to get started</p>
                  <Button onClick={() => setIsCreateDialogOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Post
                  </Button>
                </CardContent>
              </Card>
            ) : (
              postsData?.data.blogPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                        <CardDescription>
                          Created on {formatDate(post.createdAt)}
                          {post.updatedAt !== post.createdAt && (
                            <span> • Updated on {formatDate(post.updatedAt)}</span>
                          )}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(post)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                          disabled={deletePostMutation.isPending}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {post.imageUrl && (
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <p className="text-muted-foreground line-clamp-3">
                      {post.content.substring(0, 200)}...
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogManagementPage

