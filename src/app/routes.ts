import { createBrowserRouter } from 'react-router';
import { PrishHomePage } from './pages/PrishHomePage';
import { JourneysPage } from './pages/JourneysPage';
import { GalleryPage } from './pages/GalleryPage';
import { StoriesPage } from './pages/StoriesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookPage } from './pages/BookPage';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { PhotoDetailPage } from './pages/PhotoDetailPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { UploadPage } from './pages/UploadPage';
import { SavedPage } from './pages/SavedPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: PrishHomePage,
  },
  {
    path: '/journeys',
    Component: JourneysPage,
  },
  {
    path: '/gallery',
    Component: GalleryPage,
  },
  {
    path: '/stories',
    Component: StoriesPage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/contact',
    Component: ContactPage,
  },
  {
    path: '/book',
    Component: BookPage,
  },
  {
    path: '/views',
    children: [
      { index: true, Component: HomePage },
      { path: 'explore', Component: ExplorePage },
      { path: 'photo/:id', Component: PhotoDetailPage },
      { path: 'profile', Component: UserProfilePage },
      { path: 'upload', Component: UploadPage },
      { path: 'saved', Component: SavedPage },
    ],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);