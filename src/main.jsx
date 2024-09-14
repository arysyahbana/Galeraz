import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home'
import AuthLayout from './components/Layouts/AuthLayout'
import LoginPage from './pages/Auth/login'
import RegisterPage from './pages/Auth/register'
import DetailPage from './pages/detail'
import UploadPage from './pages/Post/upload'
import AlbumPage from './pages/Album/album'
import AlbumCreatePage from './pages/Album/albumCreate'
import AlbumDetailPage from './pages/Album/albumDetail'
import AlbumEditPage from './pages/Album/albumEdit'
import PostPage from './pages/Post/post'
import EditPostPage from './pages/Post/editPost'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/auth',
    element: <AuthLayout />
  },
  {
    path: '/detail/:id',
    element: <DetailPage />
  },
  {
    path: '/upload',
    element: <UploadPage />
  },
  {
    path: '/post',
    element: <PostPage />
  },
  {
    path: '/post/edit',
    element: <EditPostPage />
  },
  {
    path: '/album',
    element: <AlbumPage />
  },
  {
    path: '/album/create',
    element: <AlbumCreatePage />
  },
  {
    path: '/album/detail',
    element: <AlbumDetailPage />
  },
  {
    path: '/album/edit',
    element: <AlbumEditPage />
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
